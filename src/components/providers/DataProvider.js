import React, { useState } from 'react'

import DataContext from 'utils/DataContext'

import { useIndicators } from 'utils/api'

export default function DataProvider(props) {
  const [code, setCode] = useState(null)
  const { data, isFetching, isFetched, isError } = useIndicators(code)

  return (
    <DataContext.Provider
      value={{
        code,
        setCode,
        data,
        isFetching,
        isFetched,
        invalidData:
          (data && (!data.data || !data.data[0])) || isError ? true : false,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
