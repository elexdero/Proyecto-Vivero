 import { pool } from '../src/db.js'

export const mostrarPlantas = async(req, res) =>{
    const {rows} = await pool.query('SELECT * FROM Plantas')
    console.log(rows)
    res.json(rows)
}

export const mostrarPlantasById =async(req, res) =>{
    const {id} = req.params
    const {rows} = await pool.query(`SELECT * FROM Plantas WHERE idPlanta=$1`, [id]) 
    if(rows.length === 0){
        return res.status(404).json({message : "Planta no encontrado"})
    }   
    res.json(rows[0])
}

export const añadirPlantas = async(req, res) =>{
    const data = req.body
    const {rows} = await pool.query(`INSERT VALUES INTO Plantas(namePlanta, nameCient, typePlanta, tamPlanta, typeLuz, frecuenciaRiego, precioPlanta) VALUES($1, $2, $3, $4, $5, $6)`, [data.nameCient, data.typePlata, data.tamPlanta, data.typeLuz, data.frecRiego, data.precioPlanta])
    res.json(rows[0])
}