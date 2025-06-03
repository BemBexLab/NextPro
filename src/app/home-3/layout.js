import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterThree from "@/components/sections/footers/footerThree"

const Layout = ({ children }) => {
    return (
        <>
            <HeaderTwo haveShadow={false} haveOvcanvsIcon={false} />
            {children}
            <FooterThree />
        </>
    )
}

export default Layout