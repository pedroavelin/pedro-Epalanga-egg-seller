const router = require('express').Router()
const db = require('../../db')

router.get('/', (_, res) => {
    // listar os "Produtos" que estão na BD
    db.query('SELECT p.id, p.descricao, p.precoUnitario, p.quantidade, t.tamanho, p.dataRegistro from produtos p join tamanhos t on (p.tamanhos_id = t.id)', (error, results, _) => {
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
    // listar os "colaboradores" que estão na BD por "id"
    const {id} = req.params

    db.query('SELECT p.id, p.descricao, p.precoUnitario, p.quantidade, t.tamanho, p.dataRegistro from produtos p join tamanhos t on (p.tamanhos_id = t.id) WHERE p.id  = ?', [id], (error, results, _)=>{
        if(error){
            throw error
        }
        res.send(results[0])
    })
})

// Inserindo um novo usuário 
router.post('/', (req, res)=>{
    const tamanho = req.body 
    db.query('INSERT INTO tamanhos SET ?',[tamanho], (error, results, _)=>{
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