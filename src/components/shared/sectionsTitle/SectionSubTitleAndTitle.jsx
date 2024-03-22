import React from "react";
import titleStyles from "../../../styles/sharedStyles/sectionTitle/sectionTitle.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SectionSubTitleAndTitle = ({ title, subTitle }) => {
  return (
    <div
      className={` ${
        subTitle === "CATEGORY" && "flex items-center justify-between"
      }`}
    >
      <div
        className={`${
          subTitle === "CATEGORY" || subTitle === "SELLER"
            ? titleStyles.text_start
            : titleStyles.text_center
        }`}
      >
        <div
          className={`${
            subTitle === "CATEGORY" || subTitle === "SELLER"
              ? titleStyles.start_subtitle_container
              : titleStyles.center_subtitle_container
          }`}
        >
          <div
            className={`${
              subTitle === "CATEGORY" || subTitle === "SELLER"
                ? titleStyles.subtitle_vl_left_hidden
                : titleStyles.subtitle_vl_left
            }`}
          ></div>
          <span className={titleStyles.subtitle}>{subTitle}</span>
          <div className={titleStyles.subtitle_vl_right}></div>
        </div>
        <h1 className={titleStyles.title}>{title}</h1>
      </div>
      <Link
        className={`text-[#625EFF] font-semibold flex gap-[8px] lg:text-[16px] md:text-[11px] sm:text-[12px] text-[11px] ${
          subTitle === "CATEGORY" ? "block" : "hidden"
        }`}
        href="/live-auctions"
      >
        <span>Explore Category</span>
        <FontAwesomeIcon className="w-[8px]" icon={faArrowRight} />
      </Link>
    </div>
  );
};

export default SectionSubTitleAndTitle;
