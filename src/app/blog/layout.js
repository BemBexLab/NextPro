import { withEnUsHreflang } from "@/lib/metadata";

export const metadata = withEnUsHreflang({
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
});

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
