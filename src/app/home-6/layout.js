import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterFour from "@/components/sections/footers/footerFour"

const Layout = ({ children }) => {
    return (
        <>
            <HeaderTwo haveShadow={false} haveOvcanvsIcon={false} />
            {children}
            <FooterFour/>
        </>
    )
}

export default Layout