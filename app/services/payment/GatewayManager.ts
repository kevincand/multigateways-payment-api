import Gateway from '#models/gateway'
import GatewayMock1 from './gateways/GatewayMock1.js'
import GatewayMock2 from './gateways/GatewayMock2.js'

export default class GatewayManager {

  async getGateways() {

    const gateways = await Gateway
      .query()
      .where('is_active', true)
      .orderBy('priority', 'asc')

    return gateways.map((gateway) => {

      if (gateway.name === 'GatewayMock1') {
        return new GatewayMock1()
      }

      if (gateway.name === 'GatewayMock2') {
        return new GatewayMock2()
      }

      throw new Error('Gateway not implemented')
    })
  }

}