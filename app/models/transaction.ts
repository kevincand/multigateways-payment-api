import { ProductSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

import Transaction from './transaction.js'

export default class Product extends ProductSchema {

  @manyToMany(() => Transaction, {
    pivotTable: 'transaction_products',
    pivotColumns: ['quantity']
  })
  declare transactions: ManyToMany<typeof Transaction>

}