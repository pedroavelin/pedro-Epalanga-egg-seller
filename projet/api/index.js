const server = require('./server')
const middlewares = require('./middlewares')
const routes = require('./routes')
// const router = require('./routes/public')

// arancar o servidor (db=> é o módulo responsável pela conexão do bd e contém o método start())
server.initServer((appServer) => {
	middlewares.register(appServer)
	routes.register(appServer)
})