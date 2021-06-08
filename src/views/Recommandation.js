import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'

import { useRecommandations } from 'utils/api'
import Button from 'components/base/Button'
import Error from 'components/misc/Error'
import Advice from './recommandations/Advice'

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

  const { data, isError } = useRecommandations()

  return isError ? (
    <Error />
  ) : (
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
            {data &&
              data.map((recommandation) => (
                <Advice
                  key={recommandation.id}
                  recommandation={recommandation}
                />
              ))}
          </Slider>
        </SliderWrapper>
      </Top>
      <Bottom>
        <Button to='https://recosante.beta.gouv.fr'>M'abonner</Button>
      </Bottom>
    </Wrapper>
  )
}
