import HeaderFour from '@/components/sections/headers/headerFour'
import FooterThree from '@/components/sections/footers/footerThree'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <HeaderFour/>
        {children}
        <FooterThree/>
    </div>
  )
}

export default layout