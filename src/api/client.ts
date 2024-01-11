import { clients } from '@/mocks/clients'

export const clientApi = {
  get: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            clients
          }
        })
      }, 1000)
    })
  },
  create: (data: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        clients.push(data as never)
        resolve({
          data: {
            ...data
          }
        })
      }, 1000)
    })
  }
}
