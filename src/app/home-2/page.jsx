import React from "react";
import HeroHome2 from "./HeroHome2";
import BrowesCategories from "./BrowesCategories";
import RecentlyAdded from "./RecentlyAdded";
import Home2TopSeller from "./Home2TopSeller";
import Home2ExploreCollections from "./Home2ExploreCollections";
import Home2LiveAuctions from "./Home2LiveAuctions";

const Home2Page = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroHome2 />
      <BrowesCategories />
      <RecentlyAdded />
      <Home2TopSeller />
      <Home2ExploreCollections />
      <Home2LiveAuctions />
    </div>
  );
};

export default Home2Page;
