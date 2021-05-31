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
export default function Recommandation() {
  return (
    <Wrapper>
      <Intro>vos déplacements</Intro>
      <Reco>
        Avec un enfant, éviter les sorties à proximité des grands axes routiers
        aux heures de pointe (7h-10h et 17h-20h).
      </Reco>
      <Text>
        💡 Dans une étude réalisée en 2015, l’observatoire régional de
        surveillance de la qualité de l’air en Occitanie démontré que le choix
        d'emprunter un axe avec peu de trafic routier a permis de réduire
        l'exposition moyenne du cycliste ou du piéton d’environ 40 % pour le
        dioxyde d'azote (NO2) et de 50 % pour les particules PM10.
      </Text>
    </Wrapper>
  )
}
