import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('client_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clients')
      table
        .integer('gateway_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('gateways')
      table.string('external_id').nullable()
      table
        .enum('status', ['PENDING', 'SUCCESS', 'FAILED', 'REFUNDED'])
        .notNullable()
        .defaultTo('PENDING')
      table.integer('amount').notNullable()
      table.string('card_last_numbers').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}