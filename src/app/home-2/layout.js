import HeaderTwo from "@/components/sections/headers/headerTwo"
import FooterTwo from "@/components/sections/footers/footerTwo"

const Layout = ({ children }) => {
    return (
        <>
            <HeaderTwo haveOvcanvsIcon={true} haveShadow={true}/>
            {children}
            <FooterTwo/>
        </>
    )
}

export default Layout