import React from "react";
import exploreMoreBtnStyle from "../../styles/sharedStyles/moreBtn.module.css";
import { BsArrowRightShort } from "react-icons/bs";

const LoadMoreBtn = ({ loadMore, setLoadMore, title }) => {

  return (
    <button
      onClick={() => setLoadMore(!loadMore)}
      className={`${title=== "activity" ? exploreMoreBtnStyle.bg_more_btn_start :exploreMoreBtnStyle.bg_more_btn}`}
    >
      Load More
      <BsArrowRightShort />
    </button>
  );
};

export default LoadMoreBtn;
