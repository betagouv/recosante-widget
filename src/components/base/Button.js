import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.65em 1.6em 0.55em;
  font-size: ${(props) => (props.small ? '0.875em' : '1em')};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${(props) =>
    props.hollow
      ? props.theme.colors.main
      : props.theme.colors[
          props.theme.name === 'Défaut' ? 'background' : 'second'
        ]};
  background-color: ${(props) =>
    props.hollow ? 'transparent' : props.theme.colors.main};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 1.5rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: background-color 300ms ease-out, color 300ms ease-out;

  &:hover {
    background-color: ${(props) =>
      props.hollow ? props.theme.colors.main : props.theme.colors.main};
    color: ${(props) =>
      props.theme.colors[
        props.theme.name === 'Défaut' ? 'background' : 'second'
      ]};
  }

  &:focus {
    outline: none;
  }
`
export default function Button(props) {
  return (
    <Wrapper
      to={props.to}
      onClick={props.onClick}
      disabled={props.disabled}
      hollow={props.hollow}
      small={props.small}
      className={props.className}
      textColor={props.textColor}
    >
      {props.children}
    </Wrapper>
  )
}
