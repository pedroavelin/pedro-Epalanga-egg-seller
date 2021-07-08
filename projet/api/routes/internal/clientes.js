const router = require('express').Router()
const db = require('../../db')

router.get('/', (_, res) => {
	// listar os "Clientes" que estão na BD
	db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, e.provincia, e.municipio, e.bairro, e.numeroCasa from clientes c join usuarios u on (c.usuarios_id= u.id) JOIN clientes_has_enderecos ce on (ce.clientes_id = c.id ) join enderecos e on (ce.enderecos_id = e.id) order by u.nome LIMIT 8', (error, results, _) => {
		if (error) {
			throw error
		}
		res.send({
			data: results
		},
		);
	})
})

router.get('/provincias', (_, res) => {
	// listar as "provincias" que estão na BD
	db.query('select provincia from enderecos', (error, results, _) => {
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
	// listar os "Clientes" que estão na BD por "id"
	const { id } = req.params

	db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, e.provincia, e.municipio, e.bairro, e.numeroCasa from clientes c join usuarios u on (c.usuarios_id= u.id) JOIN clientes_has_enderecos ce on (ce.clientes_id = c.id ) join enderecos e on (ce.enderecos_id = e.id) WHERE u.id  = ? LIMIT 1', [id], (error, results, _) => {
		if (error) {
			throw error
		}
		res.send(results[0])
	})
})

// registrar cliente 
router.post('/', (req, res) => {
	const usuario = {
		nome: req.body.nome,
		numeroTelefone: req.body.numeroTelefone,
		email: req.body.email,
		senha: req.body.senha
	}
	var insertUsuarioId = null
	db.query('INSERT INTO usuarios SET ?', [usuario], (error, results, _) => {
		if (error) {
			throw error
		}
		const cliente = {
			usuarios_id: results.insertId
		}
		db.query('INSERT INTO clientes SET ?', [cliente], (error, results, _) => {
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
			db.query('INSERT INTO enderecos SET ?', [endereco], (error, results, _) => {
				if (error) {
					throw error
				}
				const cliente_has_endereco = {
					clientes_id: insertUsuarioId,
					enderecos_id: results.insertId
				}
				// insertUsuarioId = results.insertId
				db.query('INSERT INTO clientes_has_enderecos SET ?', [cliente_has_endereco], (error, results, _) => {
					if (error) {
						throw error
					}
					res.send(results[0])
				});
			});
		});
	});
})

// Eliminando usuario "ID"
router.delete('/:id', (req, res) => {
	const { id } = req.params
	db.query('DELETE FROM usuarios WHERE id= ?', [id], (error, results, _) => {
		if (error) {
			throw error
		}
		res.send(results)
	})
})

// Atualizar usuário
router.put('/:id', (req, res) => {
	const { id } = req.params

	const usuario = req.body

	db.query('UPDATE usuarios SET ? WHERE = ?', [usuario, id], (error, results, _) => {
		if (error) {
			throw error
		}
		res.send(results)
	})
})

module.exports = router