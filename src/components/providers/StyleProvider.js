import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  useQueryParam,
  StringParam,
  NumberParam,
  withDefault,
} from 'use-query-params'

import StyleContext from 'utils/StyleContext'
import { themes } from 'utils/styles'

export default function CO2NumberProvider(props) {
  const [theme, setTheme] = useQueryParam(
    'theme',
    withDefault(StringParam, 'default')
  )

  const [accessibility, setAccessibility] = useState(false)

  const [size] = useQueryParam('size', withDefault(NumberParam, 16))

  return (
    <StyleContext.Provider
      value={{
        themes,
        theme,
        setTheme,
        accessibility,
        setAccessibility,
      }}
    >
      <ThemeProvider
        theme={{
          ...themes[accessibility ? 'classic' : theme],
          size,
        }}
      >
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}
