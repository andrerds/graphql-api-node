import { IModels } from './../types/modelsTypes'
import mongoose from 'mongoose'
import { resolve } from 'path'
import { readdirSync } from 'fs'

const { MONGO_URI } = process.env

const connect = (): Promise<typeof mongoose> =>
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

const models: IModels = Object.create({})

readdirSync(__dirname)
  .filter((fileName) => !fileName.includes('index'))
  .forEach((fileName) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(resolve(__dirname, fileName)).default

    const modelName = fileName.split('.').shift().replace('Model', '')
    models[modelName] = model
    console.log('FileName', fileName)
    console.log('Model: ', modelName)
  })

export { connect, models }
