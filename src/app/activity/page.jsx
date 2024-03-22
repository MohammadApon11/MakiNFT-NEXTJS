import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";

const ActivityPage = () => {
  const props = {
    title: "Activity",
    text1: "Home",
    text2: "Activity",
  };
  return <SubPageHero {...props} />;
};

export default ActivityPage;
