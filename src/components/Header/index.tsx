import { Container, Content } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="moneyApp" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}
