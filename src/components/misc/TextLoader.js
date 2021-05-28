import React from 'react'
import styled, { keyframes } from 'styled-components'

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
const Wrapper = styled.div`
  content: '';
  position: absolute;
  bottom: -0.4rem;
  left: 0;
  width: 10rem;
  height: 1em;
  background-color: rgba(${(props) => props.theme.colors.second}, 1);
  opacity: ${(props) => (props.fetching ? 1 : 0)};
  transform-origin: left;
  pointer-events: none;
  animation: ${(props) => (props.fetching ? fetching : '')} 1000ms infinite;
`
export default function TextLoader(props) {
  return <Wrapper fetching={props.fetching} />
}
