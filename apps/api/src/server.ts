/* eslint-disable prettier/prettier */
import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'

import { Resolver } from './types'
import { models as db } from './models'

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
const createUser: Resolver<{ data: any }> = (
  parent,
  args,
  ctx,
  info,
): typeof USERS[0] => {
  const { data } = args
  console.log('Args', args)
  const user = {
    ...data,
    id: USERS.length + 1,
  }
  USERS.push(user)
  return user
}

const resolvers = {
  Query: {
    users: () => USERS,
  },
  Mutation: {
    createUser,
  },
}
const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context: { db },
})

export default server
