const { validate } = require('indicative/validator')
const db = require('../../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  validate(req.body, {
    email: 'required|email',
    senha: 'required',
  }).then((value) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [value.email], (error, results) => {
      console.log(results);
      if (results.length === 0) {
        res.status(400).send('Não foi possível encontrar nenhuma conta que corresponda ao e-mail e senha fornecidos')
      } else {
        bcrypt.compare(value.senha, results[0].senha)
          .then((match) => {
            if (match) {
              const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'
              const data = { id: results[0].id }

              delete results[0].senha

              const authToken = jwt.sign(data, secret)

              res.send({
                user: results[0],
                token: authToken
              })
            } else {
              res.status(400).send('Não é possível encontrar nenhuma conta que corresponda ao e-mail e senha fornecidos')
            }
          }).catch((error) => { throw error })
      }
    })
  }).catch((error) => res.status(400).send(error))
}