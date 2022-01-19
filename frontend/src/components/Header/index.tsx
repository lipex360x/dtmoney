import logoImg from '../../assets/logo.svg'

import * as S from './styles'

interface HeaderProps {
  openModal: () => void
}

export function Header ({ openModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="logo dt money" />
        <button onClick={openModal}>New Transaction</button>
      </S.Content>
    </S.Container>
  )
}
