import React, { useContext } from 'react'
import styled from 'styled-components'

import { useModal } from 'utils/api'
import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'

const Content = styled.div``
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export default function NextModal() {
  const { element, setElement } = useContext(ModalContext)

  const { data } = useModal(element)

  return (
    <Modal open={element} setOpen={setElement}>
      <Wrapper>
        <Content dangerouslySetInnerHTML={{ __html: data }} />
        <Button onClick={() => setElement(false)}>
          Revenir aux indicateurs
        </Button>
      </Wrapper>
    </Modal>
  )
}
