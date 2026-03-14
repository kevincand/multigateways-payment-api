import Transaction from '#models/transaction'
import GatewayManager from './GatewayManager.js'

export default class PaymentService {

  async process(transaction: Transaction) {

    const manager = new GatewayManager()
    const gateways = await manager.getGateways()

    for (const gateway of gateways) {
      try {

        const response = await gateway.processPayment({
          amount: transaction.amount,
          cardLastNumbers: transaction.cardLastNumbers
        })

        transaction.status = response.status
        transaction.externalId = response.externalId

        await transaction.save()

        return transaction

      } catch (error) {

        console.log('Gateway failed, trying next...')
        continue

      }
    }

    transaction.status = 'failed'
    await transaction.save()

    throw new Error('All gateways failed')

  }

}