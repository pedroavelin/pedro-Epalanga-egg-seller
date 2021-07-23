const server = require('./server')
const middlewares = require('./middlewares')
const routes = require('./routes')

server.initServer((appServer) => {
  middlewares.register(appServer)
  routes.register(appServer)
})