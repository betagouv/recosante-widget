import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'utils/DataContext'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  margin: 0.5rem;
  font-size: 0.625rem;
  text-align: right;
`
const Label = styled.span``
export default function Sources() {
  const { code, data, invalidData } = useContext(DataContext)

  return (
    <Wrapper>
      <Label>Les données nous sont fournies par</Label>
      <br />
      {code && data && !invalidData ? (
        <MagicLink to={data.metadata.region.website}>
          {data.metadata.region.nom_aasqa}
        </MagicLink>
      ) : (
        <MagicLink to='https://atmo-france.org/'>Atmo France</MagicLink>
      )}
      <br />
      <MagicLink to='https://www.pollens.fr'>
        Le Réseau national de surveillance aérobiologique
      </MagicLink>
    </Wrapper>
  )
}
