import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Gateway from '#models/gateway'

export default class extends BaseSeeder {

  async run() {

    await Gateway.createMany([
      {
        name: 'GatewayMock1',
        isActive: true,
        priority: 1,
      },
      {
        name: 'GatewayMock2',
        isActive: true,
        priority: 2,
      }
    ])

  }

}