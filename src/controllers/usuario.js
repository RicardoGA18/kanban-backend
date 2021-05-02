import { Usuario } from '../models/usuario'
import {hashSync,compareSync} from 'bcrypt'
import jwt from 'jsonwebtoken'
// require('dotenv').config()

export const registro = async (req,res) => {
  try {
    const objUsuario = new Usuario(req.body)
    const passHash = hashSync(req.body.password, 10)
    objUsuario.password = passHash
    const nuevoUsuario = await objUsuario.save()
    return res.status(201).json({
      success: true,
      content: nuevoUsuario,
      message: "Usuario creado correctamente"
    })
  } catch (error) {
    return res.status(400).json({
      success: true,
      content: error,
      message: "Error al registrar el usuario"
    })
  }
}
export const login = async (req,res) => {
  try {
    const { correo , password } = req.body
    const usuario = await Usuario.findOne({correo})
    if(!usuario){
      return res.status(404).json({
        success: false,
        content: null,
        message: `No existe un usuario registrado con el correo ${correo}`
      })
    }
    const coincide = compareSync(password,usuario.password)
    if(coincide){
      const token = jwt.sign({_id: usuario._id},process.env.JWT_SECRET,{
        expiresIn: 86400,
      })
      return res.json({
        success: true,
        content: token,
        message: 'bienvenido'
      })
    }
    return res.status(401).json({
      success: false,
      content: null,
      message: "Contraseña incorrecta"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: null,
      message: "Error al iniciar sesion"
    })
  }
}
export const mostrarUsuario = (req,res) => {}