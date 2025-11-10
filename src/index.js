import express from 'express'
const app = express()
import { PORT } from './config.js'

app.get('/', (req, res) =>{
    res.send ("Bienvenido al proyecto vivero")
})

app.listen(PORT, ()=>{
    console.log ('Servidor corriendo en http://localhost',PORT)
});