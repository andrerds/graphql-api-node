/* eslint-disable prettier/prettier */
import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = resolve(__dirname, 'schema.graphql')

const USERS = [
  {
    id: 1,
    name: 'Tony Esterco',
    email: 'tony@vingadores.com',
    nickname: 'ironman',
  },
  {
    id: 1,
    name: 'Thor Mais forte',
    email: 'thor@vingadores.com',
    nickname: 'thor',
  },
]
const resolvers = {
  Query: {
    users: () => USERS,
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const { data } = args
      console.log('Args', args)
      const user = {
        ...data,
        id: USERS.length + 1,
      }
      USERS.push(user)
      return user
    },
  },
}
const server = new GraphQLServer({
  resolvers,
  typeDefs,
})

export default server
