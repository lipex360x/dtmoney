import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ProviderProps {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: Date
}

type Request = Omit<ProviderProps, 'id' | 'createdAt' | 'updatedAt'>

interface ContextProps {
  providerData: ProviderProps[]
  createData: (data: Request) => Promise<void>
}

interface ProviderChildrens {
  children: ReactNode
}

const TransactionContext = createContext<ContextProps>(
  {} as ContextProps
)

export function TransactionProvider ({ children }: ProviderChildrens) {
  const [providerData, setProviderData] = useState<ProviderProps[]>([])

  useEffect(() => {
    async function getData () {
      const { data } = await api.get('transactions')
      setProviderData(data.transactions)
    }

    getData()
  }, [])

  async function createData (data: Request) {
    const response = await api.post('transactions', data)
    const { transaction } = response.data

    setProviderData([...providerData, transaction])
  }

  return (
    <TransactionContext.Provider value={{ providerData, createData }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions () {
  return useContext(TransactionContext)
}
