import { dateFormat } from '../../shared/utils/dateTransform'
import { numberToReal } from '../../shared/utils/numberTransform'
import * as S from './styles'

export function Transactions () {
  return (
    <S.Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td>{numberToReal(6000)}</td>
            <td>Venda</td>
            <td>{dateFormat(new Date())}</td>
          </tr>

          <tr>
            <td>Supermercado</td>
            <td>{numberToReal(1000)}</td>
            <td>Alimentação</td>
            <td>{dateFormat(new Date())}</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}
