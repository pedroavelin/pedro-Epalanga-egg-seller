const server = require('./server')
const middlewares = require('./middlewares')
const routes = require('./routes')
// const router = require('./routes/public')

server.initServer((appServer) => {
	middlewares.register(appServer)
	routes.register(appServer)
})