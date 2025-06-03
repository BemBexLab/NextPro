import React from 'react'

const Highlight = ({children}) => {
    return (
        <span className='relative z-[1] after:absolute after:left-0 after:bottom-[5.5px] after:w-full after:h-3 after:z-[-1] after:bg-[#F4C82A] dark:after:bg-primary after:group-hover:h-5 after:transition-all after:duration-300'>{children}</span>
    )
}

export default Highlight