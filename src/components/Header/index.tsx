import * as S from './styles'

export type HeaderProps = {
  content: string
}

const Header = ({ content }: HeaderProps) => (
  <S.Wrapper>
    <h1>{content}</h1>
  </S.Wrapper>
)

export default Header
