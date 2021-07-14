const router = require('express').Router()
const { validate } = require('indicative/validator')
const { sanitize } = require('indicative/sanitizer') // Para limpar os espaços vazios
const db = require('../../db')
// const auth = require('../../middlewares/auth') //Associando a rota Clientes a um middleware de autenticação
const bcrypt = require('bcrypt')
router.get('/', (_, res) => {
  // listar os "Clientes" que estão na BD
  db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, e.provincia, e.municipio, e.bairro, e.numeroCasa from clientes c join usuarios u on (c.usuarios_id= u.id) JOIN clientes_has_enderecos ce on (ce.clientes_id = c.id ) join enderecos e on (ce.enderecos_id = e.id) order by u.dataCadastro LIMIT 8', (error, results, _) => {
    if (error) {
      throw error
    }
    res.send({
      data: results
    },
    );
  })
})

router.get('/selectBox', (req, res) => {
  // listar os nome dos "Clientes" no "select" 
  db.query('select u.id, u.nome from usuarios u join clientes c on (c.usuarios_id=u.id) order by u.id desc limit 10', (error, results, _) => {
    if (error) {
      throw error
    }
    res.send({
      data: results
    } );
  })
})
router.get('/selectBoxProduto', (req, res) => {
  // listar o nome do "Produto" no "select" 
  //console.logg(selectBox'')
  db.query('SELECT id, descricao from produtos', (error, results, _) => {
    if (error) {
      throw error
    }
    res.send({
      data: results
    } );
  })
})

router.get('/', (_, res) => {
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
    senha: req.body.senha,
    isAdmin: req.body.isAdmin
  }

  validate(usuario, {
    nome: 'required',
    numeroTelefone: 'required',
    email: 'required|email',
    senha: 'required',
  }).then((value) => {
    sanitize(value, {
      email: 'trim|lowerCase',
      senha: 'trim',
    })
    bcrypt.hash(value.senha, 10).then((hash)=>{
      value.senha = hash
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
    }).catch((error)=>{throw error})
  
  }).catch((error) => {
    req.res.status(400).send(error)
  })

})

// Eliminando clientes "ID"
router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.query('DELETE FROM clientes WHERE id= ?', [id], (error, results, _) => {
    if (error) {
      throw error
    }
    res.send(results)
  })
})

// Atualizar clientes
router.put('/:id', (req, res) => {
  const { id } = req.params

  const usuario = req.body

  db.query('UPDATE clientes SET ? WHERE = ?', [usuario, id], (error, results, _) => {
    if (error) {
      throw error
    }
    res.send(results)
  })
})

module.exports = router