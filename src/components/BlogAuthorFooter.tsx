"use client";

import { usePathname } from "next/navigation";
import AuthorBox from "./AuthorBox";

export default function BlogAuthorFooter() {
  const pathname = usePathname();

  if (!pathname.startsWith("/blog/") || pathname === "/blog/") {
    return null;
  }

  return (
    <div className="blog-author-footer">
      <AuthorBox />
    </div>
  );
}
