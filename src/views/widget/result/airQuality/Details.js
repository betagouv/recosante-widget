import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function Details() {
  return (
    <Wrapper>
      <Element label='PM2.5' index='bon' />
      <Element label='PM10' index='moyen' />
      <Element label='NO2' index='degrade' />
      <Element label='O3' index='mauvais' />
      <Element label='SO2' index='tres-mauvais' />
    </Wrapper>
  )
}
