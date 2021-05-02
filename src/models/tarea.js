import { Schema } from 'mongoose'

export const tareaSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 40,
  },
  lugar: {
    type: String,
  },
  estado: {
    type: String,
    required: true,
  }
},{
  timestamps: false
})

