import React from 'react'
import styled from 'styled-components'

import Good from './chart/Good'
import Moyen from './chart/Moyen'
import Degrade from './chart/Degrade'
import Mauvais from './chart/Mauvais'
import TresMauvais from './chart/TresMauvais'
import ExtremementMauvais from './chart/ExtremementMauvais'
import Circle from './chart/Circle'

const Wrapper = styled.svg`
  overflow: visible;
  width: 8.875rem;
  height: auto;
`
export default function Chart(props) {
  const indice =
    props.data && props.data.data && props.data.data
      ? props.data.data.indice
      : null
  return (
    <Wrapper width='142' height='143' viewBox='0 0 142 143'>
      <mask
        id='mask0'
        mask-type='alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='142'
        height='105'
      >
        <path d='M125.868 103.396C129.251 105.349 133.613 104.201 135.219 100.64C139.329 91.5252 141.471 81.6166 141.471 71.5647C141.471 59.1481 138.202 46.9502 131.994 36.1971C125.786 25.4439 116.856 16.5145 106.103 10.3061C95.3498 4.09782 83.1519 0.829405 70.7353 0.829407C58.3187 0.829408 46.1208 4.09782 35.3676 10.3061C24.6145 16.5145 15.685 25.4439 9.47673 36.1971C3.26841 46.9502 -2.38065e-06 59.1481 0 71.5647C1.92727e-06 81.6166 2.14205 91.5252 6.25183 100.64C7.85762 104.201 12.2194 105.349 15.6026 103.396C18.9858 101.442 20.0994 97.1284 18.5832 93.528C15.6645 86.5976 14.1471 79.1319 14.1471 71.5647C14.1471 61.6314 16.7618 51.8731 21.7284 43.2706C26.6951 34.6681 33.8387 27.5245 42.4412 22.5579C51.0437 17.5912 60.802 14.9765 70.7353 14.9765C80.6686 14.9765 90.4269 17.5912 99.0294 22.5579C107.632 27.5245 114.775 34.6681 119.742 43.2706C124.709 51.8731 127.324 61.6314 127.324 71.5647C127.324 79.1319 125.806 86.5976 122.887 93.528C121.371 97.1284 122.485 101.442 125.868 103.396Z' />
      </mask>
      {indice && (
        <>
          {indice === 'bon' ? (
            <Good />
          ) : indice === 'moyen' ? (
            <Moyen />
          ) : indice === 'degrade' ? (
            <Degrade />
          ) : indice === 'mauvais' ? (
            <Mauvais />
          ) : indice === 'tres-mauvais' ? (
            <TresMauvais />
          ) : (
            <ExtremementMauvais />
          )}
        </>
      )}
      <Circle value={indice} />
    </Wrapper>
  )
}
