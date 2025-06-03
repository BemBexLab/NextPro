import HeaderThree from "@/components/sections/headers/headerThree"
import FooterThree from "@/components/sections/footers/footerThree"


const Layout = ({ children }) => {
    return (
        <>
            <HeaderThree />
            {children}
            <FooterThree className={"pt-48"} />
        </>
    )
}

export default Layout