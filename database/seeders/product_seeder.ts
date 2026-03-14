import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '#models/product'

export default class extends BaseSeeder {

  async run() {

    await Product.createMany([
      {
        name: 'Camiseta',
        amount: 5000
      },
      {
        name: 'Boné',
        amount: 3000
      },
      {
        name: 'Tênis',
        amount: 15000
      }
    ])

  }

}