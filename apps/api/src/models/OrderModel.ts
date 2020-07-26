import { OrderDocument } from './../types/orderTypes'
import { Schema, model } from 'mongoose'

const orderItemSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      require: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        'WAITING_PAYMENT', // AGUARDANDO PAGAMENTO
        'IN_QUEUE', // FILA DE PREPARO
        'PREPARING', // SENDO PREPARADO
        'READY', // JA FOI PREPARADO JA ESTA PRONTO
        'ON_THE_WAY', // A CAMINHO DO CLIENTE
        'DELIVERED', // JA FOI ENTREGE
      ],
      default: 'WAITING_PAYMENT',
    },
    items: [orderItemSchema],
  },
  {
    timestamps: true,
    useNestedStrict: true,
  },
)
export default model<OrderDocument>('Order', orderSchema)
