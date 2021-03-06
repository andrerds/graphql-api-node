import { Schema, model } from 'mongoose'

import { UserDocument } from './../types/userTypes'

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  nickname: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
})

export default model<UserDocument>('User', userSchema)

const UserModel = model<UserDocument>('User', userSchema)

const user = new UserModel()
