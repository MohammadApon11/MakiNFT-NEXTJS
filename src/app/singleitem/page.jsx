import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import SingleItem from "./SingleItem";

const SingleItemPage = () => {
  const props = {
    title: "Single Items",
    text1: "Home",
    text2: "Single Items",
  };
  return (
    <div className="overflow-hidden">
      <SubPageHero {...props} />
      <SingleItem />
    </div>
  );
};

export default SingleItemPage;
