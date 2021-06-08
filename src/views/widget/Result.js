import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'utils/DataContext'
import Button from 'components/base/Button'
import Error from 'components/misc/Error'
import Title from './result/Title'
import AirQuality from './result/AirQuality'
import Pollens from './result/Pollens'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity
    ${(props) => (props.visible ? '1200ms 300ms' : '400ms 0ms')};
`
const Separator = styled.div`
  width: 100%;
  height: 0.125rem;
  margin-bottom: 2.5rem;
  background-color: ${(props) => props.theme.colors.main};
  opacity: 0.1;
`
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function Result() {
  const { code, data, invalidData } = useContext(DataContext)

  return (
    <Wrapper visible={code}>
      {!invalidData ? (
        <>
          <div>
            <Title code={code} />
            <AirQuality data={data} />
            <Separator />
            <Pollens data={data} />
          </div>{' '}
          <Bottom>
            <Button to='/recommandation'>Comment agir ?</Button>
          </Bottom>
        </>
      ) : (
        <Error />
      )}
    </Wrapper>
  )
}
