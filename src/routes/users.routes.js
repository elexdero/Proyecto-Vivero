import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

router.get('/trabajadores', async (req, res) =>{
     const {rows} = await pool.query('SELECT * FROM trabajadores') 
     console.log(rows)
     res.json(rows)
})

router.get('/trabajadores/:id', async (req, res) =>{
    const {id}= req.params
    const {rows} = await pool.query(`SELECT * FROM trabajadores WHERE tabajadorid=$1`, [id]) 
    if(rows.length === 0){
        return res.status(404).json({message : "Usuario no encontrado"})
    }   
     res.json(rows) 
})

router.post('/trabajadores', async (req, res) =>{
    const data = req.body
    console.log(data)
    const resultado = await pool.query(`INSERT INTO trabajadores(nameTrabajador, apPatTrabajador, apMatTrabajador, direccionTrabajador, telTrabajador, emailTrabajador) VALUES($1, $2, $3, $4, $5, $6)`, [data.nameTrabajador, data.apPatTrabajador, data. apMatTrabajador, data.direccionTrabajador, data.telTrabajador, data.emailTrabajador])
    res.send("usuario creado")
    console.log(resultado)
})

router.delete('/trabajadores/:id', async(req, res)=>{
    const {id}= req.params
    const {rows} = await pool.query(`DELETE FROM trabajadores WHERE tabajadorid=$1`, [id])
    if(rows === 0){
        return res.status(404).json({message: "Error, no se puede borrar un trabajador no existente"})
    }
    res.send('Usuario elimininado')
})

router.put('/trabajadores/:id', (req, res) =>{
    const {id} = req.params
    res.send('Actualización de datos de los trabajadores'+id)
})


export default router