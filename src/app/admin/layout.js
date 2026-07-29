import { withEnUsHreflang } from "@/lib/metadata";

export const metadata = withEnUsHreflang({
  title: "Admin Dashboard - Web Founders USA",
  description: "Secure admin dashboard for managing Web Founders USA submissions.",
  alternates: {
    canonical: "https://www.webfoundersusa.com/admin",
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

export default function AdminLayout({ children }) {
  return children;
}
