import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import LivePageCards from "./LivePageCards";

const LiveAuctonsPage = () => {
  const props = {
    title: "Live Auctons",
    text1: "Home",
    text2: "Live Auctons",
  };
  return (
    <>
      <SubPageHero {...props} />
      <LivePageCards />
    </>
  );
};

export default LiveAuctonsPage;
