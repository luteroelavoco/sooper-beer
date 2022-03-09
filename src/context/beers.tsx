import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { beer } from '../types/beer'
export const BeersContext = createContext(null)

export function BeersProvider({ children }) {
  const [beers, setBeers] = useState<Array<beer>>([])
  const router = useRouter()
  
  const addBeer = (beer: beer) => {
    setBeers(oldBeers => [beer, ...oldBeers]);
    router.push('/?notfetch=true')
  }

  return (
    <BeersContext.Provider
      value={{
        beers,
        setBeers,
        addBeer
      }}
    >
      {children}
    </BeersContext.Provider>
  )
}

export function useBeers() {
  const context = useContext(BeersContext)
  const { beers, setBeers , addBeer} = context
  return { beers, setBeers , addBeer }
}
