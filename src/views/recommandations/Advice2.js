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
        améliorer l’air intérieur de votre logement
      </Intro>
      <Reco>
        En raison des risques incendies, ne faites pas fonctionner un groupe
        électrogène ou un barbecue dans un local fermé.
      </Reco>
      <Text>
        ℹ️ Pour les consommateurs qui font un usage fréquent du barbecue à
        charbon de bois, privilégier l’usage de charbon de bois épuré (> 85% de
        carbone ou de catégorie A) plutôt que de charbon de bois ordinaire.
        <br />
        <br />
        💡 Pour en savoir plus sur la cuisson au barbecue :
        https://huit.re/barbecue-air
      </Text>
    </Wrapper>
  )
}
