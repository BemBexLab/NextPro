import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/contextApi/themeProvider";
import CountryProvider from "@/contextApi/countryProvider";
import ScrollCircle from "@/components/ui/scrollCircle"
const CustomCursor = dynamic(() => import('@/components/ui/customCursor'), { ssr: false })
const Setting = dynamic(() => import('@/components/ui/setting'), { ssr: false })

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--inter"
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--plus-jakarta-sans"
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--dm-sans"
})

export const metadata = {
  title: "NextPro",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CountryProvider>
            {children}
            <Setting />
            <ScrollCircle />
            <CustomCursor />
          </CountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
