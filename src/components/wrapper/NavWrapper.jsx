"use client";
import React from "react";
import Navbar from "../shared/Navbars/Navbar";
import { usePathname } from "next/navigation";
import Home2Nav from "../shared/Navbars/Home2Nav";

const NavWrapper = () => {
  const currentPath = usePathname();
  return <>{currentPath === "/home-2" ? <Home2Nav /> : <Navbar />}</>;
};

export default NavWrapper;
