import express from 'express'
import { PORT } from './config.js'
import TrabajadoresRoutes from './routes/users.routes.js'

const app = express()

app.use(TrabajadoresRoutes)


app.get('/', (req, res) =>{
    res.send ("Bienvenido al proyecto vivero")
})



app.listen(PORT, ()=>{
    console.log ('Servidor corriendo en http://localhost',PORT)
});