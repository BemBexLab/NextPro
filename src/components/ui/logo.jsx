import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="w-[240px] h-[96px]">
      <Link href={"/"} className="relative">
        <Image
          src="/images/image123.webp"
          width={240}
          height={96}
          sizes="240px"
          className="block h-full w-full object-contain"
          alt="Web Founders USA"
        />
      </Link>
    </div>
  );
};

export default Logo;
