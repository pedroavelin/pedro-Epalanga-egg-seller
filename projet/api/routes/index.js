const usuarioRouter = require('./internal/clientes')
const colaboradoresRouter = require('./internal/colaboradores')
const produtosRouter = require('./internal/produtos')

module.exports = {
    register(app){
        app.use('/clientes', usuarioRouter)
        app.use('/colaboradores', colaboradoresRouter)
        app.use('/produtos', produtosRouter)
    }
}