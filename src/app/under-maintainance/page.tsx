import Link from "next/link";
import styles from "./page.module.css";
import { withEnUsHreflang } from "@/lib/metadata";

export const metadata = withEnUsHreflang({
  title: "Under Maintenance - Web Founders USA",
  description: "This Web Founders USA page is temporarily under maintenance.",
  alternates: {
    canonical: "https://www.webfoundersusa.com/under-maintainance",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
});

export default function Page() {
  return (
    <section className={styles.pageShell}>
      <svg style={{ display: "none" }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className={styles.wrapper}>
        <div className={styles.maintenanceBox}>
          <div className={styles.liquidGlassEffect}></div>
          <div className={styles.liquidGlassTint}></div>
          <div className={styles.liquidGlassShine}></div>
          <div className={styles.liquidGlassText}>
            <h1 className={styles.title}>Blog Page Under Maintenance</h1>
            <p className={styles.description}>
              Something new is coming soon. Please check back later!
            </p>
            <Link href="/" className={styles.homeButton}>
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
