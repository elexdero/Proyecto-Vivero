import { Router } from 'express'
import {mostrarTrabajadores, mostrarTrabajadoresById, añadirTrabajadores, borrarTrabjadorById, actualizarTrabajadorById} from '../../controllers/user.controllers.js'
import { mostrarPlantas, mostrarPlantasById, añadirPlantas} from '../../controllers/plantas.controllers.js'
const router = Router()

//rutas para los trabajadores
router.get('/trabajadores', mostrarTrabajadores)

router.get('/trabajadores/:id', mostrarTrabajadoresById)

router.post('/trabajadores', añadirTrabajadores)

router.delete('/trabajadores/:id', borrarTrabjadorById)

router.put('/trabajadores/:id', actualizarTrabajadorById)


//rutas para las plantas
router.get('/plantas', mostrarPlantas)

router.get('/plantas/:id', mostrarPlantasById)

router.post('/plantas', añadirPlantas)

export default router