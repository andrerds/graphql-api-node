import { Schema, Document } from 'mongoose'

export enum UserRole {
  USER,
  ADMIN,
}

export interface IUser {
  _id: Schema.Types.ObjectId
  name: string
  nickname: string
  password: string
  role: UserRole
}

export interface UserDocument extends IUser, Document {
  _id: Schema.Types.ObjectId
}
