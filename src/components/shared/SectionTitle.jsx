import React from "react";
import sectionTitleStyle from "../../styles/sharedStyles/sectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return (
    <h1
      className={`${sectionTitleStyle.section_title} ${
        title === "Live Auctions"
          ? sectionTitleStyle.section_margin
          : ""
      } ${
        title === "Top Seller"
          ? sectionTitleStyle.section_margin
          : ""
      }`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
