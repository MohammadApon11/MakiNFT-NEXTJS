import React from "react";
import sectionTitleStyle from "../../styles/sharedStyles/sectionTitle.module.css";
import Reveal from "../framer-motion/Reveal";

const SectionTitle = ({ title }) => {
  return (
    <Reveal>
      <h1
        className={`${sectionTitleStyle.section_title} ${
          title === "Live Auctions" ? sectionTitleStyle.section_margin : ""
        } ${title === "Top Seller" ? sectionTitleStyle.section_margin : ""}`}
      >
        {title}
      </h1>
    </Reveal>
  );
};

export default SectionTitle;
