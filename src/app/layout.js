import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contextApi/themeProvider";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle";
import FooterFour from "@/components/sections/footers/footerFour";
import HeaderTwo from "@/components/sections/headers/headerTwo";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import ContactPopup from "@/components/popupform/ContactPopup";
const CustomCursor = dynamic(() => import("@/components/ui/customCursor"), {
  ssr: false,
});
const Setting = dynamic(() => import("@/components/ui/setting"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--dm-sans",
});

export const metadata = {
  title: "WebFoundersUSA",
  description:
    "WebFoundersUSA is a leading digital agency specializing in web development, digital marketing, SEO, branding, and e-commerce solutions. We help businesses grow online with custom websites, effective marketing strategies, and measurable results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
            <HeaderTwo haveOvcanvsIcon={false} haveShadow={false} />
            {children}
            <ContactPopup />
            {/* <ContactFormTwo /> */}
            <FooterFour />
            <Setting />
            <ScrollCircle />
            <CustomCursor />
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
