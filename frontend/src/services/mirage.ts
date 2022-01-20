import { createServer, Model, Factory } from 'miragejs'

export default createServer({
  models: {
    transaction: Model
  },

  factories: {
    transaction: Factory.extend({
      title (value) {
        return `${value}`
      },

      createdAt () {
        return new Date()
      },

      updatedAt () {
        return new Date()
      }
    })
  },

  seeds (server) {
    server.create('transaction', { title: 'Freelance', amount: 6000, type: 'deposit', category: 'venda' })
    server.create('transaction', { title: 'Supermercado', amount: -1000, type: 'withdraw', category: 'alimentação' })
  },

  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
