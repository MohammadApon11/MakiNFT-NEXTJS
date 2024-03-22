import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import CollectionCards from "./CollectionCards";

const CollectionPage = () => {
  const props = {
    title: "Collection",
    text1: "Home",
    text2: "Collection",
  };
  return (
    <>
      <SubPageHero {...props} />
      <CollectionCards />
    </>
  );
};

export default CollectionPage;
