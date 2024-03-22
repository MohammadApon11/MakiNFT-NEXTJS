import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import ExploreArtworkV2 from "./ExploreArtworkV2";

const ExplreV2Page = () => {
  const props = {
    title: "Explore Artwork V2",
    text1: "Home",
    text2: "Explore",
    text3: "Explore Artwork V2",
  };
  return (
    <>
      <SubPageHero {...props} />
      <ExploreArtworkV2 />
    </>
  );
};

export default ExplreV2Page;
