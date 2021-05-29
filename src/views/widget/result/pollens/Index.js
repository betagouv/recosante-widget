import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 0.5rem;
  text-align: right;
`
const Label = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
  opacity: 0.7;
`
const Value = styled.div`
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.main};
  line-height: 1.1;
`
const Toggle = styled.button`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  cursor: pointer;
`
export default function Index(props) {
  return (
    <Wrapper>
      <Label>Risque d’allergie aux pollens</Label>
      <Value>Moyen</Value>
      <Toggle onClick={() => props.setOpen((prevOpen) => !prevOpen)}>
        {props.open ? 'Cacher' : 'Voir'} les pollens actifs
      </Toggle>
    </Wrapper>
  )
}
