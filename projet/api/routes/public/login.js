const { validate } = require('indicative/validator')
const db = require('../../db')
module.exports = (req, res) => {
  validate(req.body, {
    nome: 'required',
    senha: 'required',
  }).then((value) => {
    db.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?', [value.nome, value.senha], (error, results) => {
        if(results.length === 0){
          res.status(400).send('Usuário não encontrado! consulte o administrador')
        }else{
          res.send(results[0])
        }
    })
  }).catch((error) => res.status(400).send(error))
}