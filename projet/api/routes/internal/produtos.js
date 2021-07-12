const router = require('express').Router()
const db = require('../../db')
const auth = require('../../middlewares/auth')

router.get('/', (_, res) => {
  // listar os "Produtos" que estão na BD
  db.query('SELECT p.id, p.descricao, p.precoUnitario, p.quantidade, t.tamanho, p.dataRegistro from produtos p join tamanhos t on (p.tamanhos_id = t.id)', (error, results, _) => {
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

  db.query('SELECT p.id, p.descricao, p.precoUnitario, p.quantidade, t.tamanho, p.dataRegistro from produtos p join tamanhos t on (p.tamanhos_id = t.id) WHERE p.id  = ?', [id], (error, results, _) => {
    if (error) {
      throw error
    }
    res.send(results[0])
  })
})

// registar um novo Produto 
router.post('/', (req, res) => {
  const tamanho = {
    tamanho: req.body.tamanho
  }
  db.query('INSERT INTO tamanhos SET ?', [tamanho], (error, results, _) => {
    if (error) {
      throw error
    }
    const produto = {
      descricao: req.body.descricao,
      precoUnitario: req.body.precoUnitario,
      quantidade: req.body.quantidade,
      tamanhos_id: results.insertId
    }
    db.query('INSERT INTO produtos SET ?', [produto], (error, results, _) => {
      if (error) {
        throw error
      }
      res.send(results[0])
    })
  });
})

// Eliminando usuario "ID"
router.delete('/:id', (req, res) => {
  const { id } = req.params

  db.query('DELETE FROM produtos WHERE id = ?', [id], (error, results, _) => {
    if (error) {
      throw error
    }
    res.send(results)
  })
})

// Atualizar Produto
router.put('/:id', (req, res) => {
  const { id } = req.params

  const produto = req.body

  db.query('UPDATE produtos SET WHERE id = ?', [produto, id], (error, results, _) => {
    if (error) {
      throw error
    }
    res.send(results)
  })
})

module.exports = router