import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [element, setElement] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        element,
        setElement,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
