import HeaderOne from '@/components/sections/headers/headerOne'
import FooterOne from '@/components/sections/footers/footerOne'


const Layout = ({ children }) => {
    return (
        <>
            <HeaderOne />
            {children}
            <FooterOne />
        </>
    )
}

export default Layout