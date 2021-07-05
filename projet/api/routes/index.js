const usuarioRouter = require('./internal/clientes')
const colaboradores = require('./internal/colaboradores')

module.exports = {
    register(app){
        app.use('/clientes', usuarioRouter)
        app.use('/colaboradores', colaboradores)
    }
}