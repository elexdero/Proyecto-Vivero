 import { pool } from '../src/db.js'
 
 export const mostrarTrabajadores = async (req, res) =>{
     const {rows} = await pool.query('SELECT * FROM trabajadores') 
     console.log(rows)
     res.json(rows)
}

export const mostrarTrabajadoresById =  async (req, res) =>{
    const {id}= req.params
    const {rows} = await pool.query(`SELECT * FROM trabajadores WHERE tabajadorid=$1`, [id]) 
    if(rows.length === 0){
        return res.status(404).json({message : "Usuario no encontrado"})
    }   
     res.json(rows[0]) 
}

export const añadirTrabajadores = async (req, res) =>{
    const data = req.body

    const {rows} = await pool.query(`INSERT INTO trabajadores(nameTrabajador, apPatTrabajador, apMatTrabajador, direccionTrabajador, telTrabajador, emailTrabajador) VALUES($1, $2, $3, $4, $5, $6)`, [data.nameTrabajador, data.apPatTrabajador, data.apMatTrabajador, data.direccionTrabajador, data.telTrabajador, data.emailTrabajador])
    res.json(rows[0])
}

export const borrarTrabjadorById = async(req, res)=>{
    const {id}= req.params
    const {rows} = await pool.query(`DELETE FROM trabajadores WHERE tabajadorid=$1`, [id])
    if(rows === 0){
        return res.status(404).json({message: "Error, no se puede borrar un trabajador no existente"})
    }
    res.sendStatus(204)
}

export const actualizarTrabajadorById = async (req, res) =>{//combina get y delete
    const {id} = req.params
    const data = req.body
    const result = await pool.query('UPDATE trabajadores SET nameTrabajador = $1, apPatTrabajador = $2, apMatTrabajador = $3, direccionTrabajador = $4, telTrabajador = $5, emailTrabajador =$6 WHERE tabajadorId = $7 RETURNING *',[data.nameTrabajador, data.apPatTrabajador, data. apMatTrabajador, data.direccionTrabajador, data.telTrabajador, data.emailTrabajador, id])

    return res.json(result.rows[0])
}