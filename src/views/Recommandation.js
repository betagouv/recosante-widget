import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'

import Button from 'components/base/Button'
import Buttons from 'components/misc/Buttons'
import Advice from './recommandations/Advice'
import Advice2 from './recommandations/Advice2'
import Advice3 from './recommandations/Advice3'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Top = styled.div``
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`
const Title = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  text-align: center;
`
const SliderWrapper = styled.div`
  margin: 0 -2rem;

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
    top: 0.3rem;
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
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function Recommandation() {
  let history = useHistory()

  return (
    <Wrapper>
      <Top>
        <Header>
          <Button hollow onClick={() => history.goBack()}>
            ← Retour
          </Button>
        </Header>
        <Title>
          Découvrez nos <strong>recommandations</strong> pour
        </Title>
        <SliderWrapper>
          <Slider infinite={true}>
            <Advice />
            <Advice2 />
            <Advice3 />
          </Slider>
        </SliderWrapper>
      </Top>
      <Bottom>
        <Buttons recommandation />
      </Bottom>
    </Wrapper>
  )
}
