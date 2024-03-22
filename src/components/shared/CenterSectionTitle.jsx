import React from "react";
import titleStyles from "../../styles/sharedStyles/centerSectionTitle.module.css";

const CenterSectionTitle = ({ title }) => {
  return <h1 className={titleStyles.center_section_title}>{title}</h1>;
};

export default CenterSectionTitle;
