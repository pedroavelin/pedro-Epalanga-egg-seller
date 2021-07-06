const usuarioRouter = require('./internal/clientes')
const colaboradoresRouter = require('./internal/colaboradores')
const produtosRouter = require('./internal/produtos')
const despesasRouter = require('./internal/despesas')

module.exports = {
    register(app){
        app.use('/clientes', usuarioRouter)
        app.use('/colaboradores', colaboradoresRouter)
        app.use('/produtos', produtosRouter)
        app.use('/despesas', despesasRouter)
    }
}