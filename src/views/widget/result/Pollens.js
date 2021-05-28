import React, { useState } from 'react'
import styled from 'styled-components'

import Index from './pollens/Index'
import Chart from './pollens/Chart'
import Details from './pollens/Details'

const Wrapper = styled.div``
const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export default function AirQualityIndex(props) {
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Header>
        <Index data={props.data} open={open} setOpen={setOpen} />
        <Chart data={props.data} />
      </Header>
      <Details data={props.data} open={open} />
    </Wrapper>
  )
}
