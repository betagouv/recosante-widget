import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 0.5rem;
`
const Label = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
  opacity: 0.7;
`
const Value = styled.div`
  margin-left: -0.2rem;
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.main};
  line-height: 1.1;
`
export default function Index(props) {
  return (
    <Wrapper>
      <Label>Indice de qualité de l'air</Label>
      <Value>{props.data && props.data.data[0].label}</Value>
    </Wrapper>
  )
}
