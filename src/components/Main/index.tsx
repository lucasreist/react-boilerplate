import * as S from './styles'

const Main = ({ title = 'React Avançado', description = 'React Teste' }) => (
  <S.Wrapper>
    <S.Logo
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      alt="Logo do React"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="https://stories.freepiklabs.com/storage/32153/react-pana-3990.png"
      alt="Ilustração"
    />
  </S.Wrapper>
)

export default Main
