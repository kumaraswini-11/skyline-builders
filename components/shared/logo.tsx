import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center">
      <Image
        src="/assets/logo.svg"
        width={230}
        height={48}
        alt="App Logo"
        priority // Added for better LCP
      />
    </Link>
  );
};
