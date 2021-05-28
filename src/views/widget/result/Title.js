import React from 'react'
import styled, { keyframes } from 'styled-components'

import { useCode } from 'utils/api'
import MagicLink from 'components/base/MagicLink'
import TextLoader from 'components/misc/TextLoader'

const fetching = keyframes`
  from {
    transform: scaleX(0);
    opacity: 0;
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    opacity: 1;
    transform-origin: right;
  }
  to {
    transform: scaleX(0);
    opacity: 0;
    transform-origin: right;
  }
`
const Wrapper = styled.h2`
  margin-bottom: 3rem;
  font-size: 2rem;
`
const Resize = styled.span`
  font-size: ${(props) =>
    props.length > 30 ? 1 : props.length > 20 ? 1.5 : 2}rem;
`
const City = styled(MagicLink)`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
  transition: color 300ms ease-out;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.2rem;
    background-color: ${(props) => props.theme.colors.main};
    transition: all 300ms ease-out;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    &:before {
      bottom: 36%;
      height: 0.3rem;
      left: -0.2rem;
      right: -0.2rem;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: 0;
    width: 10rem;
    height: 1em;
    background-color: rgba(${(props) => props.theme.colors.second}, 1);
    opacity: ${(props) => (props.isFetching ? 1 : 0)};
    transform-origin: left;
    pointer-events: none;
    animation: ${(props) => (props.isFetching ? fetching : '')} 1000ms infinite;
  }
`
export default function Title(props) {
  const { data, isFetching, isError } = useCode(props.code)

  return (
    <Wrapper>
      Aujourd'hui,
      <br />
      <Resize
        length={data && data[0] && data[0]['nom'] && data[0]['nom'].length}
      >
        à{' '}
        <City to={'/'}>
          {data
            ? data[0]
              ? data[0]['nom']
              : 'Erreur'
            : isError
            ? 'Erreur'
            : ''}
          <TextLoader fetching={isFetching} />
        </City>
      </Resize>
    </Wrapper>
  )
}
