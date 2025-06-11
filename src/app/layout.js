import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contextApi/themeProvider";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle";
import FooterFour from "@/components/sections/footers/footerFour";
import HeaderTwo from "@/components/sections/headers/headerTwo";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
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
    "WebFounder USA is a leading web development company that provides custom web development services to businesses of all sizes. We are a team of experienced web developers who are dedicated to providing the best possible web development services to our clients.",
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
            <ContactFormTwo />
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
