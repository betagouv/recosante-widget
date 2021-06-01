import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'
import Marianne from 'components/base/Marianne'
import Logo from 'components/misc/Logo'
import Sources from 'components/misc/Sources'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 0.25rem;
`
const Logos = styled(MagicLink)`
  display: flex;
  align-items: center;
`
export default function Footer(props) {
  return (
    <Wrapper>
      <Logos to='https://recosante.beta.gouv.fr'>
        <Marianne />
        <Logo />
      </Logos>
      <Sources />
    </Wrapper>
  )
}
