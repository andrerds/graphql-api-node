/* eslint-disable @typescript-eslint/ban-types */
import { GraphQLFieldResolver } from 'graphql'
import { IContext } from '.'

export type Resolver<TArgs, TSource = {}> = GraphQLFieldResolver<
  TSource,
  IContext,
  TArgs
>
