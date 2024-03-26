import React from "react";
import titleStyles from "../../styles/sharedStyles/centerSectionTitle.module.css";
import Reveal from "../framer-motion/Reveal";

const CenterSectionTitle = ({ title }) => {
  return (
    <Reveal center={true}>
      <h1 className={titleStyles.center_section_title}>{title}</h1>
    </Reveal>
  );
};

export default CenterSectionTitle;
