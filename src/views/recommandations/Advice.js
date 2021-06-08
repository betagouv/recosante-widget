import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 2rem;
`
const Intro = styled.div`
  margin: 0 2rem 2rem;
  font-size: 1.75rem;
  font-weight: 800;
  font-style: italic;
  text-align: center;
`
const Reco = styled.p`
  font-weight: 700;
`
const Text = styled.p``
export default function Recommandation(props) {
  return (
    <Wrapper>
      <Intro
        dangerouslySetInnerHTML={{
          __html: props.recommandation.objectif,
        }}
      />
      <Reco
        dangerouslySetInnerHTML={{
          __html: props.recommandation.recommandation,
        }}
      />
      <Text
        dangerouslySetInnerHTML={{ __html: props.recommandation.precisions }}
      />
    </Wrapper>
  )
}
