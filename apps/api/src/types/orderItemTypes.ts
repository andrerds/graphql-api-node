import { IProduct } from './productTypes'
import { Schema, Types } from 'mongoose'

export interface IOrderItem {
  _id: Schema.Types.ObjectId
  product: IProduct
  quantity: number
  total: number
  createdAt: string
  updateAt: string
}

export interface OrderItemSubdocument extends IOrderItem, Types.Embedded {
  _id: Schema.Types.ObjectId
}
