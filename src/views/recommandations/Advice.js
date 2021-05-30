import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 2rem;
`
const Intro = styled.div`
  margin: 0 2rem 2rem;
  font-size: 1.75rem;
  font-weight: 800;
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
        Pour éviter le développement de moisissures, aérer quotidiennement son
        logement notamment lors d'activité produisant de l'humidité (douche,
        cuisine, séchage du linge…).
      </Reco>
      <Text>
        ℹ️ Les moisissures ont des effets négatifs sur la santé, elles
        exacerbent les allergies respiratoires et l'asthme.
        <br />
        <br />
        💡 En cas de détection de moisissure, il est déconseillé aux personnes
        atteintes de pathologies respiratoires de nettoyer elles-mêmes les
        moisissures. Contacter son propriétaire si le problème est récurrent.
      </Text>
    </Wrapper>
  )
}
