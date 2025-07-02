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
       <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)})(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1460230578479668');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1460230578479668&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
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
