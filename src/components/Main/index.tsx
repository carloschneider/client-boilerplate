import * as S from './styles'

export type MainProps = {
  title: string
}

const Main = ({ title }: MainProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Main
