const router = require('express').Router()
const db = require('../../db')
const auth = require('../../middlewares/auth')

router.get('/', (_, res) => {
    // listar os "Encomendas" que estão na BD
    db.query('select u.nome, pro.descricao, pro.precoUnitario, pro.quantidade, t.tamanho, p.totalPago, e.estado, enc.dataEncomenda, u.numeroTelefone from clientes cli join usuarios u on(cli.usuarios_id = u.id) join clientes_has_enderecos ce on(ce.clientes_id = cli.id) join enderecos en on(ce.enderecos_id = en.id) join colaboradores col on(col.usuarios_id = u.id) join encomendas enc on(enc.colaborador_id = col.id) join estados e on(enc.estados_id = e.id) join pagamentos p on(enc.pagamentos_id = p.id) join produtos pro on(enc.produtos_id = pro.id) join tamanhos t on(pro.tamanhos_id = t.id)', (error, results, _) => {
        if (error) {
        throw error
    }
    res.send({
        data: results
    },
    );
})
})

router.get('/:id', (req, res) => {
    // listar os "encomendas" que estão na BD por "id"
    const { id } = req.params

    db.query('select u.nome, pro.descricao, pro.precoUnitario, pro.quantidade, t.tamanho, p.totalPago, e.estado, enc.dataEncomenda, u.numeroTelefone from clientes cli join usuarios u on(cli.usuarios_id = u.id) join clientes_has_enderecos ce on(ce.clientes_id = cli.id) join enderecos en on(ce.enderecos_id = en.id) join colaboradores col on(col.usuarios_id = u.id) join encomendas enc on(enc.colaborador_id = col.id) join estados e on(enc.estados_id = e.id) join pagamentos p on(enc.pagamentos_id = p.id) join produtos pro on(enc.produtos_id = pro.id) join tamanhos t on(pro.tamanhos_id = t.id) WHERE enc.id  = ? LIMIT 1', [id], (error, results, _) => {
        if (error) {
            throw error
        }
        res.send(results[0])
    })
})

// Inserindo um novo usuário 
router.post('/', (req, res) => {
    const usuario = req.body
    db.query('INSERT INTO usuarios SET ?', [usuario], (error, results, _) => {
        if (error) {
            throw error
        }
        res.send(results[0])
    });
})

// Eliminando usuario "ID"
router.delete('/:id', (req, res) => {
    const { id } = req.params

    db.query('DELETE FROM usuarios WHERE id= ?', [id], (error, results, _) => {
        if (error) {
            throw error
        }
        res.send(results)
    })
})

// Atualizar usuário
router.put('/:id', (req, res) => {
    const { id } = req.params

    const usuario = req.body

    db.query('UPDATE usuarios SET ? WHERE = ?', [usuario, id], (error, results, _) => {
        if (error) {
            throw error
        }
        res.send(results)
    })
})

module.exports = router