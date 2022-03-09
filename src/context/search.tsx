import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react'
import { useRouter } from 'next/router'

export const SearchContext = createContext(null)

export function SearchProvider({ children }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      let urlQueries = '/'
      urlQueries = query ? `/?beer_name=${query}` : `/?page=${page}` 
      router.push(urlQueries)
    }
    didMountRef.current = true
  }, [query, page])

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        page,
        setPage
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  const { query, setQuery, page, setPage } = context
  return { query, setQuery, page, setPage }
}
