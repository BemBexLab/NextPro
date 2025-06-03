"use client"
import React, { createContext, useState } from 'react'

export const CountryContext = createContext(null)
const CountryProvider = ({children}) => {
    const [selectCountry, setSelectCountry] = useState()
  return (
    <CountryContext.Provider value={{selectCountry, setSelectCountry}}>
        {children}
    </CountryContext.Provider>
  )
}

export default CountryProvider