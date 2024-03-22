"use client";
import React, { useState } from "react";
import creatorsCardsStyle from "../../styles/creators/creatorsCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDroplet,
  faPlus,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import PaginationBtn from "@/components/shared/PaginationBtn";
import paginationBtnStyle from "../../styles/sharedStyles/paginationBtn.module.css";

const CreatorsCards = () => {
  //   pagination work
const [currentPage, setCurrentPage] = useState(1);
const totalPages = 7;
const itemsPerPage = 4;

const goToPreviousPage = () => {
  setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
};

const goToNextPage = () => {
  setCurrentPage((prevPage) =>
    prevPage < totalPages ? prevPage + 1 : prevPage
  );
};

const renderPageNumbers = () => {
  const pageNumbers = [];
  const startIndex = currentPage > 3 ? currentPage - 2 : 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalPages);

  for (let i = startIndex; i <= endIndex; i++) {
    pageNumbers.push(
      <button
        key={i}
        className={`${paginationBtnStyle.pagination_btn} ${
          currentPage === i ? paginationBtnStyle.active : ""
        }`}
        onClick={() => setCurrentPage(i)}
      >
        {`0${i}`.slice(-2)}
      </button>
    );
  }
  return pageNumbers;
};
  return (
    <>
      <section className={creatorsCardsStyle.creator_container}>
        <div className={creatorsCardsStyle.creator_card_group}>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_480_359} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_480_359} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_480_359} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 1 */}
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 1 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 2 */}
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 2 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 3 */}
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 3 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 4 */}
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 4 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 5 */}
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 5 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 6 */}
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 6 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          {/* 7 */}
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.hide_for_768_541} ${creatorsCardsStyle.right_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_one_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.left_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Followed
            </button>
          </div>
          <div
            className={`${currentPage === 7 ? "block" : "hidden"} ${creatorsCardsStyle.creator_card} ${creatorsCardsStyle.card_hide_three} ${creatorsCardsStyle.card_hide_four} ${creatorsCardsStyle.right_half_s}`}
          >
            <div className={creatorsCardsStyle.creator_image_container}>
              <img
                className={creatorsCardsStyle.creator_card_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <div className={creatorsCardsStyle.check_icon}>
                <i className={creatorsCardsStyle.gg_check}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={creatorsCardsStyle.creator_card_copy}>
              <i>
                <FontAwesomeIcon icon={faCopy} />
              </i>
              <span>12acB457...5sd</span>
            </div>
            <h4 className={creatorsCardsStyle.creator_card_title}>
              Marry Morgean
            </h4>
            <div className={creatorsCardsStyle.creator_card_info}>
              <div className={creatorsCardsStyle.info_1}>
                <i>
                  <FontAwesomeIcon icon={faIntercom} />
                </i>
                <span>NFTs: 24</span>
              </div>
              <div className={creatorsCardsStyle.info_2}>
                <i>
                  <FontAwesomeIcon icon={faDroplet} />
                </i>
                <span>Level: 8</span>
              </div>
            </div>
            <button className={creatorsCardsStyle.follow_btn}>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Follow
            </button>
          </div>
        </div>
        <PaginationBtn goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} renderPageNumbers={renderPageNumbers} />
      </section>
    </>
  );
};

export default CreatorsCards;
