const db = require("../db")

module.exports = (req, res, next) => {
  // const authorization = req.headers('Authorization')

  const id = req.body
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    }
    if (results.length === 0) { //retorna um erro se não encontrar o usuário
      res.status(401).send('Você não tem acesso para fazer login, contacte o administrador')
    } else {
      next()
    }
  })
}