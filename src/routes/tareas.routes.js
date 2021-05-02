import { Router } from 'express'
import * as tareaController from '../controllers/tarea'
import { verificarUsuario } from '../middlewares/verificarUsuario'

const router = Router()

router.get('/tareas/:userId',verificarUsuario,tareaController.obtenerTareas)
router.post('/tareas/:userId',verificarUsuario,tareaController.crearTarea)

export default router