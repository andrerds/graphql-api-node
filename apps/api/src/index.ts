import server from './server'
import { connect } from './models'

const { PORT: port = 4000 } = process.env

const main = async (): Promise<void> => {
  await connect()
  await server.start({ port })
  console.log(`Server rodando na porta > ${port}...`)
}

main().catch(console.log)
