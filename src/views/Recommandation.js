import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import Advice from './recommandations/Advice'

const Wrapper = styled.div`
  margin: 4rem -2rem 0;

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 1rem 0.5rem;

      opacity: 0.4;
      transition: opacity 200ms;

      &.slick-active {
        opacity: 1;
      }
      button  {
        width: 1rem;
        height: 1rem;
        color: transparent;
        border: none;
        border-radius: none;
        background-color: ${(props) => props.theme.colors.main};
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }
  .slick-arrow {
    position: absolute;
    z-index: 5;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: transparent;
    border: none;
    border-radius: none;
    background-color: transparent;
    cursor: pointer;

    &:before {
      content: '❯';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      line-height: 0.7;
      color: ${(props) => props.theme.colors.main};
    }
    &:focus {
      outline: none;
    }
  }
  .slick-prev {
    left: 2rem;

    &:before {
      content: '❮';
    }
  }
  .slick-next {
    right: 2rem;

    &:before {
      content: '❯';
    }
  }
  .slick-list {
    z-index: 2;
  }
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;

    > div {
      height: 100%;
    }
  }
`
export default function Recommandation() {
  return (
    <Wrapper>
      <Slider infinite={true}>
        <Advice />
        <Advice />
        <Advice />
        <Advice />
      </Slider>
    </Wrapper>
  )
}
