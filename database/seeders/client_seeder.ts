import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Client from '#models/client'

export default class extends BaseSeeder {

  async run() {

    await Client.create({
      name: 'Cliente Teste',
      email: 'cliente@test.com'
    })

  }

}