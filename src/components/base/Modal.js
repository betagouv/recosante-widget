import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  z-index: 900;
  top: -2rem;
  left: -2rem;
  width: calc(100% + 4rem);
  height: calc(100% + 4rem);
  transform: translate3d(0, 0, 1rem);
  pointer-events: ${(props) => (props.open ? 'inherit' : 'none')};
  background: linear-gradient(
    315deg,
    ${(props) => props.theme.colors.gradientStart} 0%,
    ${(props) => props.theme.colors.gradientEnd} 100%
  );
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 300ms;

  h1 {
    padding-right: 3rem;
  }
`
const ButtonClose = styled.svg`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  backdrop-filter: blur(0.1rem);
  cursor: pointer;

  path {
    fill: ${(props) => props.theme.colors.main};
  }
  .animate {
    transform-origin: 1rem;
    transition: transform 300ms ease-out;
  }

  &:hover {
    .animate {
      transform: scale(1.2) rotate(180deg);
    }
  }
`
const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  opacity: ${(props) => (props.open ? 1 : 0)};
  transition: opacity 600ms 300ms;
`
export default function Modal(props) {
  return (
    <Wrapper open={props.open} className={props.className}>
      <ButtonClose
        width='32'
        height='32'
        viewBox='0 0 32 32'
        onClick={() => props.setOpen(false)}
      >
        <path d='M27.3206 4.6836C21.0815 -1.55559 10.9263 -1.55559 4.68711 4.6836C1.66483 7.70707 0 11.7261 0 16.0003C0 20.2746 1.66483 24.2936 4.68711 27.3159C7.80733 30.4361 11.9056 31.9956 16.0038 31.9956C20.1021 31.9956 24.2004 30.4361 27.3206 27.3159C33.5598 21.0767 33.5598 10.924 27.3206 4.6836ZM25.5677 25.563C20.2943 30.8365 11.7134 30.8365 6.43994 25.563C3.88629 23.0094 2.47927 19.6127 2.47927 16.0003C2.47927 12.388 3.88629 8.99133 6.43994 6.43643C11.7134 1.16294 20.2943 1.16419 25.5677 6.43643C30.84 11.7099 30.84 20.2908 25.5677 25.563Z' />
        <path
          className='animate'
          d='M21.3453 19.4269L17.8358 15.9224L21.3453 12.418C21.8287 11.9345 21.8287 11.1498 21.3466 10.6651C20.8619 10.1791 20.0772 10.1804 19.5925 10.6638L16.0806 14.1708L12.5687 10.6638C12.084 10.1804 11.2993 10.1791 10.8146 10.6651C10.3311 11.1498 10.3311 11.9344 10.8158 12.418L14.3253 15.9224L10.8158 19.4269C10.3311 19.9103 10.3311 20.695 10.8146 21.1798C11.0563 21.4227 11.3749 21.543 11.6923 21.543C12.0096 21.543 12.327 21.4215 12.5687 21.181L16.0806 17.674L19.5925 21.181C19.8343 21.4227 20.1516 21.543 20.469 21.543C20.7864 21.543 21.1049 21.4215 21.3467 21.1798C21.83 20.695 21.83 19.9103 21.3453 19.4269Z'
        />
      </ButtonClose>
      <Content open={props.open}>{props.children}</Content>
    </Wrapper>
  )
}
