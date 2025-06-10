import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo2 = () => {
  return (
    <div className="w-auto h-auto">
      <Link href={"/"} className="relative">
        <Image
          src={"/images/image123.png"}
          width={500}
          height={200}
          unoptimized="true"
          alt="logo-original"
          className="w-full h-full block"
        />
      </Link>
    </div>
  );
};

export default Logo2;
