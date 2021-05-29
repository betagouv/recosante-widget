import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 2rem;
`
const Intro = styled.div`
  margin: 0 2rem 2rem;
  font-style: italic;
  font-weight: 700;
  text-align: center;
`
const Reco = styled.p`
  font-weight: 700;
`
const Text = styled.p``
export default function Recommandation() {
  return (
    <Wrapper>
      <Intro>
        Découvrez une recommandation pour
        <br />
        contribuer à réduire la pollution de l’air
      </Intro>
      <Reco>Il est interdit de brûler ses déchets verts en extérieur.</Reco>
      <Text>
        ℹ️ Il est conseillé de les apporter en déchèterie ou de les recycler
        pour votre jardin sous forme de compost.
        <br />
        <br />
        💡La combustion de biomasse (feux de cheminée, feux agricoles et feux de
        jardins) est responsable de 50 à 70 % de la pollution carbone hivernale
        en Europe.
      </Text>
    </Wrapper>
  )
}
