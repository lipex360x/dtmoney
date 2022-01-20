import { createServer, Model } from 'miragejs'

export default createServer({
  models: {
    transaction: Model
  },

  seeds (server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-01 09:00:00'),
          updatedAt: new Date('2021-02-01 09:00:00')
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: -2000,
          createdAt: new Date('2021-03-01 14:00:00'),
          updatedAt: new Date('2021-03-01 14:00:00')
        }
      ]
    })
  },

  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (server, request) => {
      const data = JSON.parse(request.requestBody)

      data.createdAt = new Date()
      data.updatedAt = new Date()

      return server.create('transaction', data)
    })
  }
})
