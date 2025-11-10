import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

router.get('/trabajadores', (req, res) =>{
    res.send('Apartado para la obtención de los trabajadores')
})

router.get('/trabajadores/:id', (req, res) =>{
    const {id} = req.params
    res.send('Id de los trabajadores '+id)
})

router.post('/trabajadores', (req, res) =>{
    res.send('Registrar nuevos trabajadores')
})

router.delete('/trabajadores/:id', (req, res)=>{
    res.send('Borrar trabajadores')
})

router.put('/trabajadores/:id', (req, res) =>{
    const {id} = req.params
    res.send('Actualización de datos de los trabajadores'+id)
})


export default router