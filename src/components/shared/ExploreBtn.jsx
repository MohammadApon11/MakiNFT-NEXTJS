// "use client";
import React from "react";
import exploreMoreBtnStyle from "../../styles/sharedStyles/moreBtn.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const ExploreBtn = () => {
  return (
    <button className={exploreMoreBtnStyle.more_btn}>
      <Link href="/explore">Explore More</Link>
      <BsArrowRightShort />
    </button>
  );
};

export default ExploreBtn;
