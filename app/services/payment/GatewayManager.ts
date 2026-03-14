import Gateway from '#models/gateway'
import { GatewayRegistry } from './gateways/GatewayRegistry.js'

export default class GatewayManager {

  async getGateways() {

    const gateways = await Gateway
      .query()
      .where('is_active', true)
      .orderBy('priority', 'asc')

    return gateways.map((gateway) => {

      const GatewayClass = GatewayRegistry[gateway.name as keyof typeof GatewayRegistry]

      if (!GatewayClass) {
        throw new Error(`Gateway ${gateway.name} not implemented`)
      }

      return new GatewayClass()
    })
  }

}