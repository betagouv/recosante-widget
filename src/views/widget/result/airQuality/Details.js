import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function Details(props) {
  return (
    <Wrapper>
      <Element label='PM2.5' index='moyen' />
      <Element label='PM10' index={props.data && props.data.data[0].indice} />
      <Element label='NO2' index='moyen' />
      <Element label='O3' index='moyen' />
      <Element label='SO2' index='bon' />
    </Wrapper>
  )
}
