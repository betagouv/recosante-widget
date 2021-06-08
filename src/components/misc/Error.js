import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'
import hedgehog from './error/hedgehog.jpg'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
  margin-bottom: 1rem;
`
const Text = styled.p`
  max-width: 15rem;
  text-align: center;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
`
export default function Error() {
  return (
    <Wrapper>
      <Title>Oups :(</Title>
      <Text>
        Un problème est survenu. Voici une photo de hérisson pour nous excuser.
      </Text>
      <Image src={hedgehog} alt='Hérisson mignon' />
      <Button to='/'>Revenir au choix de la ville</Button>
    </Wrapper>
  )
}
