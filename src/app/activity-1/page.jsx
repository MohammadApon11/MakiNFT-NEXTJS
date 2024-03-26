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
    <div className="overflow-hidden">
      <SubPageHero {...props} />
      <ActivityCards />
    </div>
  );
};

export default ActivityV1Page;
