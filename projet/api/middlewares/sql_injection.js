// Sql_ijection => É o código responsável por lidar com a proteção de Sql_Injection
const { sanitize } = require('indicative/sanitizer')

module.exports = (req, res, next) => {

  const sanitizers = {}

  for (const key in req.body) {
    sanitizers[key] = 'escape'
  }

  sanitize(req.body, sanitizers)

  for (const key in req.require) {
    sanitizers[key] = 'escape'
  }

  sanitize(req.require, sanitizers)

  next()
}
