import React from "react";
import sliderHeaderStyles from "../../styles/sharedStyles/sliderHeader.module.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import SectionTitle from "./SectionTitle";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

const SliderHeader = (props) => {
  
  return (
    <div className={sliderHeaderStyles.slider_header}>
      <SectionTitle title={props.title} />
      <div className={sliderHeaderStyles.slider_btn_group}>
        <PrevArrow />
        <NextArrow />
      </div>
    </div>
  );
};

export default SliderHeader;
