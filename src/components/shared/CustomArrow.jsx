"use client";
import React from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsCheckLg } from "react-icons/bs";
import sliderBtnStyles from "../../styles/sharedStyles/sliderBtn.module.css";

export const PrevArrow = ({ className, style, onClick, title }) => {
  return (
    <button
      className={`${sliderBtnStyles.slider_btn_prev}  ${
        title === "Live Auctions"
          ? sliderBtnStyles.slider_btn_prev_position_for_live_auctions
          : title === "Home 2 Top Seller"
          ? sliderBtnStyles.slider_btn_prev_position_for_top_seller_home_2
          : sliderBtnStyles.slider_btn_prev_position_for_top_seller
      }`}
      onClick={onClick}
    >
      <BsArrowLeftShort />
    </button>
  );
};

export const NextArrow = ({ className, style, onClick, title, classNames }) => {
  return (
    <button
      // style={{ display: "block", background: "red" }}
      className={`${sliderBtnStyles.slider_btn_next} ${
        title === "Live Auctions"
          ? sliderBtnStyles.slider_btn_next_position_for_live_auctions
          : title === "Home 2 Top Seller"
          ? sliderBtnStyles.slider_btn_next_position_for_top_seller_home_2
          : sliderBtnStyles.slider_btn_next_position_for_top_seller
      }`}
      onClick={onClick}
    >
      <BsArrowRightShort />
    </button>
  );
};
