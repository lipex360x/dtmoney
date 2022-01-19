import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { numberToReal } from '../../shared/utils/numberTransform'

import * as S from './styles'

export function Summary () {
  return (
    <S.Container>

      <div>
        <header>
          <span>Income</span>
          <img src={incomeImg} alt="income img" />
        </header>
        <h2>{numberToReal(6000)}</h2>
      </div>

      <div>
        <header>
          <span>Outcome</span>
          <img src={outcomeImg} alt="outcome img" />
        </header>
        <h2>-{numberToReal(1000)}</h2>
      </div>

      <div className='total'>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="total img" />
        </header>
        <h2>{numberToReal(5000)}</h2>
      </div>
    </S.Container>
  )
}
