import Hero from "./HeroHome1";
import ExploreCardSection from "./ExploreCardSection";
import Categories from "./Categories";
import Collections from "./Collections";
import TopSeller from "./TopSeller";
import LiveAuctions from "./LiveAuctions";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExploreCardSection />
      <Categories />
      <LiveAuctions />
      <Collections />
      <TopSeller />
    </>
  );
};
export default HomePage;
