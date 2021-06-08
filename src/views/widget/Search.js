import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchBar from './search/SearchBar'

import DataContext from 'utils/DataContext'
import Button from 'components/base/Button'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity
    ${(props) => (props.visible ? '1200ms 300ms' : '400ms 0ms')};
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.4;
  text-align: center;
  margin: 5rem 0 3rem;
`
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.p`
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  text-align: center;
`
export default function Search() {
  const { code } = useContext(DataContext)

  return (
    <Wrapper visible={!code}>
      <Content>
        <Title>
          Découvrez la <strong>qualité de l’air</strong> près de chez vous
        </Title>
        <SearchBar />
      </Content>
      <Bottom>
        <Text>
          Recosanté est une <strong>lettre d’information numérique</strong> qui
          vous propose chaque jour une <strong>recommandation</strong> pour vous
          aider à réduire les impacts{' '}
          <strong>des polluants atmosphériques et des pollens</strong> sur votre
          santé.
        </Text>
        <Button hollow to='https://recosante.beta.gouv.fr'>
          M'abonner
        </Button>
      </Bottom>
    </Wrapper>
  )
}
