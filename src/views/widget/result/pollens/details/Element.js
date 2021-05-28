import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-right: 9.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.6;
  text-align: right;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 8.75rem;
    height: 1rem;
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 0.5rem;
    opacity: 0.15;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${(props) => 8.75 - (props.value / 5) * 8.75}rem;
    transform: translateY(-50%) scaleX(${(props) => (props.open ? 1 : 0)});
    transform-origin: left;
    width: ${(props) => (props.value / 5) * 8.75}rem;
    height: 1rem;
    background-color: ${(props) => props.theme.colors.raep[props.value]};
    border-radius: ${(props) =>
      props.value < 5 ? '0.5rem 0 0 0.5rem' : '0.5rem'};
    transition: transform ${(props) => (props.open ? 150 * props.value : 0)}ms
      ${(props) => (props.open ? props.index * 100 : 0)}ms ease-out;
  }
`
export default function Element(props) {
  return (
    <Wrapper
      index={props.index}
      open={props.open}
      visible={props.visible}
      value={props.value}
    >
      {props.label}
    </Wrapper>
  )
}
