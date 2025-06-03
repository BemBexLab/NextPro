import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterFour from "@/components/sections/footers/footerFour"

const Layout = ({ children }) => {
    return (
        <>
            <HeaderTwo haveOvcanvsIcon={false} haveShadow={false} />
            {children}
            <FooterFour />
        </>
    )
}

export default Layout