import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import DataContext from 'utils/DataContext'
import Search from './widget/Search'
import Result from './widget/Result'

export default function Widget() {
  let { code } = useParams()
  const { setCode } = useContext(DataContext)
  useEffect(() => {
    setCode(code)
  }, [code, setCode])

  return (
    <>
      <Search />
      <Result />
    </>
  )
}
