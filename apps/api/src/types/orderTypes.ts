import { IUser } from './userTypes'
import { Schema, Document } from 'mongoose'

export enum OrderStatus {
  WAITING_PAYMENT, // AGUARDANDO PAGAMENTO
  IN_QUEUE, // FILA DE PREPARO
  PREPARING, // SENDO PREPARADO
  READY, // JA FOI PREPARADO JA ESTA PRONTO
  ON_THE_WAY, // A CAMINHO DO CLIENTE
  DELIVERED, // JA FOI ENTREGE
}

export interface IOrder {
  _id: Schema.Types.ObjectId
  user: IUser | Schema.Types.ObjectId
  total: number
  status: OrderStatus
  createdAt: string
  updateAt: string
}

export interface OrderDocument extends IOrder, Document {
  _id: Schema.Types.ObjectId
}
