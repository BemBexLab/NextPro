import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo2 = ({ link = true }) => {
  const logo = (
    <Image
      src="/images/image123.webp"
      width={500}
      height={200}
      unoptimized="true"
      alt="logo-original"
      className="block h-full w-full"
    />
  );

  return (
    <div className="w-auto h-auto">
      {link ? (
        <Link href="/" className="relative">
          {logo}
        </Link>
      ) : (
        logo
      )}
    </div>
  );
};

export default Logo2;
