"use client";
import React from "react";
import titleBtnStyle from "../../styles/sharedStyles/titleBtnHeader.module.css";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import SectionTitle from "./SectionTitle";

const TitleBtnHeader = ({ path, title, btnText }) => {
  return (
    <div className={titleBtnStyle.title_btn_header}>
      <SectionTitle title={title} />
      <Link href={path} className={titleBtnStyle.btn}>
        {btnText ? btnText : "Explore Category"}
        <BsArrowRightShort />
      </Link>
    </div>
  );
};

export default TitleBtnHeader;
