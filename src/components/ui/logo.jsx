import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="w-[240px] h-[96px]">
      <Link href={"/"} className="relative">
        <video
          src="/videos/web founder logo animate 1.mp4"
          width={240}
          height={96}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full block object-contain"
          aria-label="logo-original"
        />
      </Link>
    </div>
  );
};

export default Logo;
