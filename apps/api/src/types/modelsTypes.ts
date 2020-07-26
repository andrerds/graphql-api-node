import { Model } from 'mongoose'

import { OrderDocument, ProductDocument, UserDocument } from '.'

export interface IModels {
  Order: Model<OrderDocument>
  Product: Model<ProductDocument>
  User: Model<UserDocument>
}
