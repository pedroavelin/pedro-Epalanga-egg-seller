const clientRouter = require('./internal/clientes')
const colaboradoresRouter = require('./internal/colaboradores')
const produtosRouter = require('./internal/produtos')
const despesasRouter = require('./internal/despesas')
const encomendasRouter = require('./internal/encomendas')

const login = require('./public/login')

module.exports = {
  register(app) {
    app.use('/clientes', clientRouter)
    app.use('/colaboradores', colaboradoresRouter)
    app.use('/produtos', produtosRouter)
    app.use('/despesas', despesasRouter)
    app.use('/encomendas', encomendasRouter)

    app.post('/login', login)
  }
}