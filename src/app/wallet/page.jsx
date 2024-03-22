import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import WalletCards from "./WalletCards";

const WalletPage = () => {
  const props = {
    title: "Wallet",
    text1: "Home",
    text2: "Wallet",
  };
  return (
    <>
      <SubPageHero {...props} />
      <WalletCards />
    </>
  );
};

export default WalletPage;
