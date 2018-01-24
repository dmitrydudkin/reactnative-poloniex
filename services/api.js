// @flow
import apisauce from 'apisauce';

const baseURL = 'https://poloniex.com/';

const create = (): Api => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getTickets = () => api.get('public', { command: 'returnTicker' })

  return {
    getTickets
  }
}

export default { create }

interface Api {
  getTickets(): Promise<>;
}
