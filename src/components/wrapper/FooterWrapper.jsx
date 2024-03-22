"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FooterHome2 from "../shared/footers/FooterHome2";
import FooterOne from "../shared/footers/FooterOne";
import MaxUsedFooter from "../shared/footers/MaxUsedFooter";
const FooterWrapper = () => {
  const currentPath = usePathname();
  return (
    <>
      {currentPath === "/home-1" ? (
        <FooterOne />
      ) : currentPath === "/home-2" ? (
        <FooterHome2 />
      ) : currentPath === "/home-3" ? (
        <FooterOne />
      ) : (
        <MaxUsedFooter />
      )}
    </>
  );
};

export default FooterWrapper;
