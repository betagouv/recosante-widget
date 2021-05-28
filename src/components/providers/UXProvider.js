import React from 'react'

import UXContext from 'utils/UXContext'
import usePageView from 'hooks/usePageView'

export default function UXProvider(props) {
  usePageView('Widget | Recosanté')

  return <UXContext.Provider value={{}}>{props.children}</UXContext.Provider>
}
