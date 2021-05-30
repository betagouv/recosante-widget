import React from 'react'
import styled from 'styled-components'

import Button from 'components/base/Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`
export default function Buttons(props) {
  return (
    <Wrapper>
      <StyledButton to='https://recosante.beta.gouv.fr'>M'abonner</StyledButton>
      {!props.recommandation && (
        <Button hollow to='/recommandation'>
          Comment agir ?
        </Button>
      )}
    </Wrapper>
  )
}
