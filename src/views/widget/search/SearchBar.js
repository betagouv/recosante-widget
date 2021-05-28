import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'

import { useSearch } from 'utils/api'
import useDebounce from 'hooks/useDebounce'
import TextInput from './searchBar/TextInput'
import Suggestions from './searchBar/Suggestions'

const Wrapper = styled.form`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0.5rem;
  right: 0.5rem;
  background-color: ${(props) => props.theme.colors.background};
  ${(props) => props.theme.shadow};
  border-radius: 2rem;
  box-shadow: 0 0.25rem 0.5rem #e3e8f2;
  transition: box-shadow 200ms ease-out;
  transition: border 200ms ease-out;
  overflow: hidden;
`

export default function SearchBar() {
  let history = useHistory()
  const location = useLocation()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const { data, isFetching } = useSearch(debouncedSearch)

  const [focus, setFocus] = useState(false)
  const input = useRef(null)
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!focus) {
      setCurrent(0)
      input.current && input.current.blur()
    }
  }, [focus])

  const navigateToProduct = (product) => {
    history.push(`/${product[`code`]}${location.search}`)
    setFocus(false)
  }

  return (
    <Wrapper
      focus={focus}
      onSubmit={(e) => {
        e.preventDefault()
        if (current > -1) {
          navigateToProduct(data[current])
        }
      }}
    >
      <TextInput
        ref={input}
        search={search}
        suggestion={data && data[current]}
        suggestionVisible={data && focus}
        isFetching={isFetching}
        setSearch={setSearch}
        setFocus={setFocus}
      />
      {data && focus && (
        <Suggestions
          search={debouncedSearch}
          results={data}
          focus={focus}
          current={current}
          isFetching={isFetching}
          setCurrent={setCurrent}
          handleSuggestionClick={navigateToProduct}
        />
      )}
    </Wrapper>
  )
}
