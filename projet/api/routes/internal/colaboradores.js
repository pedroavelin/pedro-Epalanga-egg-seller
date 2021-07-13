const router = require('express').Router()
const db = require('../../db')
const auth = require('../../middlewares/auth')
const { validate } = require('indicative/validator')
const { sanitize } = require('indicative/sanitizer')
const bcrypt = require('bcrypt')
router.get('/', (_, res) => {
	// listar os "colaboradores" que estão na BD
	db.query('SELECT u.id, u.isAdmin, u.nome, u.numeroTelefone, u.email, u.dataCadastro, c.salario, e.provincia, e.municipio, e.bairro, e.numeroCasa from usuarios u join colaboradores c on (c.usuarios_id = u.id) join enderecos e on (c.enderecos_id = e.id) order by u.dataCadastro LIMIT 7 ', (error, results) => {
		if (error) {
			throw error
		}
		res.send({
			data: results
		},
		);
	})
})

router.get('/:id', (req, res) => {
	// listar os "colaboradores" que estão na BD por "id"
	const { id } = req.params

	db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, c.salario, e.provincia, e.municipio, e.bairro, e.numeroCasa from usuarios u join colaboradores c on (c.usuarios_id = u.id) join enderecos e on (c.enderecos_id = e.id) WHERE u.id  = ? LIMIT 1', [id], (error, results, _) => {
		if (error) {
			throw error
		}
		res.send(results[0])
	})
})

// Registar um novo colaborador 
router.post('/', (req, res) => {
	const usuario = {
		nome: req.body.nome,
		numeroTelefone: req.body.numeroTelefone,
		email: req.body.email,
		senha: req.body.senha,
		isAdmin: req.body.isAdmin,
	}

	validate(usuario, {
		nome: 'required',
		numeroTelefone: 'required|integer',
		email: 'required|email',
		senha: 'required',
	}).then((value) => {
		sanitize(value, {
			email: 'trim|lowerCase',
			senha: 'trim'
		})
		bcrypt.hash(value.senha, 10).then((hash) => {
			value.senha = hash
			let insertUsuarioId = null
			db.query('INSERT INTO usuarios SET ?', [usuario], (error, results) => {
				if (error) {
					throw error
				}
				const endereco = {
					provincia: req.body.provincia,
					municipio: req.body.municipio,
					bairro: req.body.bairro,
					numeroCasa: req.body.numeroCasa
				}
				insertUsuarioId = results.insertId
				db.query('INSERT INTO enderecos SET ?', [endereco], (error, results) => {
					if (error) {
						throw error
					}
					const colaborador = {
						salario: req.body.salario,
						enderecos_id: results.insertId,
						usuarios_id: insertUsuarioId
					}
					db.query('INSERT INTO colaboradores SET ?', [colaborador], (error, results) => {
						if (error) {
							throw error
						}
						res.send(results[0])
					});
				});
			});
		}).catch((error) => { throw error })
	}).catch((error) => {
		req.res.status(400).send(error)
	})

})

// Eliminando colaborador "ID"
router.delete('/:id', (req, res) => {
	const { id } = req.params

	db.query('DELETE FROM colaboradores WHERE id= ?', [id], (error, results) => {
		if (error) {
			throw error
		}
		res.send(results)
	})
})

// Atualizar colaborador
router.put('/:id', (req, res) => {
	const { id } = req.params

	const usuario = req.body

	db.query('UPDATE colaboradores SET ? WHERE = ?', [usuario, id], (error, results) => {
		if (error) {
			throw error
		}
		res.send(results)
	})
})

module.exports = router