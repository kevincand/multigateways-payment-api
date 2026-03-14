import GatewayInterface, { PaymentData, GatewayResponse } from './GatewayInterface.js'
import crypto from 'node:crypto'

export default class GatewayMock1 implements GatewayInterface {

  async processPayment(data: PaymentData): Promise<GatewayResponse> {

    // simula falha aleatória
    if (Math.random() < 0.5) {
      throw new Error('GatewayMock1 failure')
    }

    return {
      status: 'approved',
      externalId: crypto.randomUUID()
    }
  }

}