const bodyParser = require('body-parser')
const sqlInjectionProtection = require('./sql_injection')
const xss = require('./xss')

const middlewares = [
  bodyParser.json(),
  sqlInjectionProtection,
  xss
]

module.exports = {
  register(app){
    for(const middleware of middlewares){
      app.use(middleware)
    }
  }
}