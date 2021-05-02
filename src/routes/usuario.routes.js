import {Router} from 'express'
import * as usuarioController from '../controllers/usuario'

const router = Router()

router.post('/registro',usuarioController.registro)
router.post('/login',usuarioController.login)

export default router