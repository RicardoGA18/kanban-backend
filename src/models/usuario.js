import { Schema,model } from 'mongoose'
import { tareaSchema } from './tarea' 

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  celular:{
    type: Number,
    unique: true,
  },
  fecha_nacimiento:{
    type: Date,
    required: true,
  },
  tareas: [tareaSchema],
},{
  timestamps: {
    createdAt: "fecha_creacion",
    updatedAt: false,
  },
})

export const Usuario = model('Usuario',usuarioSchema)