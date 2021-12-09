import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: string
  title: string
  type: string
  amount: number
  category: string
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => {
      const data = response.data.transactions
      setTransactions(data)
    })
  }, [])
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
