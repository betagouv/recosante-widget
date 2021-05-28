import React from 'react'
import styled from 'styled-components'

import Index from './airQuality/Index'
import Chart from './airQuality/Chart'
import Details from './airQuality/Details'

const Wrapper = styled.div`
  margin-bottom: 2.5rem;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function AirQualityIndex(props) {
  return (
    <Wrapper>
      <Header>
        <Index data={props.data} />
        <Chart data={props.data} />
      </Header>
      <Details data={props.data} />
    </Wrapper>
  )
}
