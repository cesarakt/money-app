import { Container } from './styles'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const { transactions, formatCurrency } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator.deposits += transaction.amount
        accumulator.total += transaction.amount
      } else {
        accumulator.withdraws += transaction.amount
        accumulator.total -= transaction.amount
      }

      return accumulator
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="entradas" />
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="saidas" />
        </header>
        <strong>- {formatCurrency(summary.withdraws)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}
