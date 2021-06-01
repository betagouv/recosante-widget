import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

const Wrapper = styled.div`
  position: relative;
  padding-left: 1.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.6;
  cursor: pointer;
  transition: color 300ms ease-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.375rem;
    height: 1.375rem;
    background-color: ${(props) => props.theme.colors[props.index]};
    border-radius: 0.25rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`
const Superscript = styled.sup`
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.main};
`
export default function Element(props) {
  const { setElement } = useContext(ModalContext)
  return props.value ? (
    <Wrapper index={props.value.indice} onClick={() => setElement(props.label)}>
      {props.label}
      <Superscript> (?)</Superscript>
    </Wrapper>
  ) : null
}
