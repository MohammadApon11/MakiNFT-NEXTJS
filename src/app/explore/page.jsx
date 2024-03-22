import React from "react";
import SubPageHero from "@/components/shared/SubPageHero";
import ExploreCards from "./ExploreCards";

const ExplorePage = () => {
  const props = {
    title: "Explore Artwork",
    text1: "Home",
    text2: "Explore",
    text3: "Explore Artwork",
  };

  return (
    <>
      <SubPageHero {...props} />
      <ExploreCards />
    </>
  );
};

export default ExplorePage;
