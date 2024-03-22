import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import CreatorsCards from "./CreatorsCards";

const CreatorsPage = () => {
  const props = {
    title: "Creators",
    text1: "Home",
    text2: "Creators",
  };
  return (
    <>
      <SubPageHero {...props} />
      <CreatorsCards />
    </>
  );
};

export default CreatorsPage;
