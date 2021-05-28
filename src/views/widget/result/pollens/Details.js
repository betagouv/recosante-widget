import React from 'react'
import styled from 'styled-components'

import Element from './details/Element'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: ${(props) => (props.open ? 'auto' : 0)};
  margin-bottom: ${(props) => (props.open ? '1rem' : 0)};
  overflow: hidden;
`
const Elements = styled.div``
export default function Details(props) {
  return (
    <Wrapper open={props.open}>
      <Elements>
        <Element index={0} open={props.open} label='Chêne' value={2} />
        <Element index={1} open={props.open} label='Bouleau' value={3} />
        <Element index={2} open={props.open} label='Cypres' value={2} />
        <Element index={3} open={props.open} label='Graminées' value={5} />
        <Element index={4} open={props.open} label='Frênes' value={1} />
        <Element index={5} open={props.open} label='Charme' value={4} />
      </Elements>
    </Wrapper>
  )
}
