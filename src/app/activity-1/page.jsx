import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import ActivityCards from "./ActivityCards";

const ActivityV1Page = () => {
  const props = {
    title: "Activity V1",
    text1: "Home",
    text2: "Activity",
    text3: "Activity V1",
  };
  return (
    <>
      <SubPageHero {...props} />
      <ActivityCards />
    </>
  );
};

export default ActivityV1Page;
