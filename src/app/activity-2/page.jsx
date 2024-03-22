import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import ActivityV2Cards from "./ActivityV2Cards";

const ActivityV2Page = () => {
  const props = {
    title: "Activity V2",
    text1: "Home",
    text2: "Activity",
    text3: "Activity V2",
  };
  return (
    <>
      <SubPageHero {...props} />
      <ActivityV2Cards />
    </>
  );
};

export default ActivityV2Page;
