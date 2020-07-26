import { Schema, Document } from 'mongoose'
export interface IProduct {
  _id: Schema.Types.ObjectId
  name: string
  description: string
  price: number
  unit: string
}

export interface ProductDocument extends IProduct, Document {
  _id: Schema.Types.ObjectId
}
