export interface GatewayResponse {
  status: string
  externalId: string
}

export interface PaymentData {
  amount: number
  cardLastNumbers: string
}

export default interface GatewayInterface {
  processPayment(data: PaymentData): Promise<GatewayResponse>
}