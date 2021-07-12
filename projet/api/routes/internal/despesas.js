const router = require('express').Router()
const db = require('../../db')
const auth = require('../../middlewares/auth')

router.get('/', (_, res) => {
    // listar os "Despesas" que estão na BD
    db.query('SELECT d.id, td.descricaoDespesa, tp.modPagamento, d.valorUnit, d.quantidade, d.observacao, tp.enderecoBancario, p.totalPago from tipoDespesas td join despesas d on (d.tipoDespesas_id = td.id) join tipopagamentos tp on(d.tipoPagamentos_id = tp.id) join pagamentos_has_tipopagamentos pt on(pt.tipoPagamentos_id = tp.id) join pagamentos p on(pt.pagamentos_id = p.id)', (error, results, _) => {
        if (error) {
            throw error
        }
        res.send({
            data: results
        },
        );
    })
})

router.get('/:id', (req, res) =>{
    // listar os "Despesas" que estão na BD por "id"
    const {id} = req.params

    db.query('SELECT d.id, td.descricaoDespesa, tp.modPagamento, d.valorUnit, d.quantidade, d.observacao, tp.enderecoBancario, p.totalPago from tipoDespesas td join despesas d on (d.tipoDespesas_id = td.id) join tipopagamentos tp on(d.tipoPagamentos_id = tp.id) join pagamentos_has_tipopagamentos pt on(pt.tipoPagamentos_id = tp.id) join pagamentos p on(pt.pagamentos_id = p.id) WHERE d.id  = ? LIMIT 1', [id], (error, results, _)=>{
        if(error){
            throw error
        }
        res.send(results[0])
    })
})

// Inserindo um novo Despesas 
router.post('/', (req, res)=>{
    const usuario = req.body
    db.query('INSERT INTO despesas SET ?',[usuario], (error, results, _)=>{
        if(error){
            throw error
        }
        res.send(results[0])
    });
})

// Eliminando usuario "ID"
router.delete('/:id',(req, res) =>{
    const {id} = req.params

    db.query('DELETE FROM usuarios WHERE id= ?', [id], (error, results,_) =>{
        if(error){
            throw error
        }
        res.send(results)
    })
})

// Atualizar usuário
router.put('/:id', (req, res) => {
    const {id} = req.params

    const usuario = req.body

    db.query('UPDATE usuarios SET ? WHERE = ?', [usuario, id], (error, results, _) => {
        if(error){
            throw error
        }
        res.send(results)
    })
})

module.exports = router