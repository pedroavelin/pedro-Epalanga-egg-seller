const bodyParser = require('body-parser')

const middlewares =[
  bodyParser.json()
]

module.exports = {
  register(app){
    for(const middleware of middlewares){
      app.use(middleware)
    }
  }
}