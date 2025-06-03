import React from 'react'

const Paper = ({width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none" style={{width, height}}>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.1771 1.71782H7.81158C4.25825 1.70416 1.34554 4.53657 1.26183 8.0882V26.3896C1.18325 29.9993 4.04471 32.9906 7.65442 33.0709C7.70738 33.0709 7.75863 33.0726 7.81158 33.0709H21.4595C25.0367 32.9257 27.8555 29.9702 27.8298 26.3896V10.731L19.1771 1.71782Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.7283 1.69775V6.6673C18.7283 9.09313 20.6894 11.0594 23.1153 11.0663H27.8217" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4088 23.2375H9.18384" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.9155 16.8268H9.18237" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Paper