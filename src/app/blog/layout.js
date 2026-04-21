export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
