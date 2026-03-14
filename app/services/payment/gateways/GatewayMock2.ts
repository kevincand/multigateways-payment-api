import GatewayInterface, { PaymentData, GatewayResponse } from './GatewayInterface.js'
import crypto from 'node:crypto'

export default class GatewayMock2 implements GatewayInterface {

  async processPayment(data: PaymentData): Promise<GatewayResponse> {

    return {
      status: 'approved',
      externalId: crypto.randomUUID()
    }
  }

}