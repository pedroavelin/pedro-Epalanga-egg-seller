const router = require('express').Router()
const db = require('../../db')

router.get('/', (_, res) => {
    // listar os "colaboradores" que estão na BD
    db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, c.salario, e.provincia, e.municipio, e.bairro, e.numeroCasa from usuarios u join colaboradores c on (c.usuarios_id = u.id) join enderecos e on (c.enderecos_id = e.id)', (error, results, _) => {
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

    db.query('SELECT u.id, u.nome, u.numeroTelefone, u.email, u.dataCadastro, c.salario, e.provincia, e.municipio, e.bairro, e.numeroCasa from usuarios u join colaboradores c on (c.usuarios_id = u.id) join enderecos e on (c.enderecos_id = e.id) WHERE u.id  = ? LIMIT 1', [id], (error, results, _)=>{
        if(error){
            throw error
        }
        res.send(results[0])
    })
})

// Cadastrando um novo colaborador 
router.post('/', (req, res)=>{
    const colaborador = req.body
    db.query('INSERT INTO colaboradores SET ?',[colaborador], (error, results, _)=>{
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