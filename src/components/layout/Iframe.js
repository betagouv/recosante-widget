import React from 'react'
import styled from 'styled-components'

import Footer from 'components/layout/Footer'
import Cloud from 'components/misc/Cloud'

const Wrapper = styled.div`
  position: relative;
  width: 31.75rem;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
`
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 2rem;
  background: linear-gradient(
    315deg,
    ${(props) => props.theme.colors.gradientStart} 0%,
    ${(props) => props.theme.colors.gradientEnd} 100%
  );
  border: 0.0625rem solid rgb(${(props) => props.theme.colors.second});
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1),
    0.25rem 0.25rem 2rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 39.75rem;
`
export default function Iframe(props) {
  return (
    <Wrapper>
      <Card>
        <Content>{props.children}</Content>
        <Cloud />
      </Card>
      <Footer />
    </Wrapper>
  )
}
