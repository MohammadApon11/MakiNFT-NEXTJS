"use client"
import React, { useState } from "react";
import explorePageCardsStyles from "../../styles/explore/explorePageCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import PaginationBtn from "@/components/shared/PaginationBtn";
import paginationBtnStyle from "../../styles/sharedStyles/paginationBtn.module.css";

const ExploreCards = () => {
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
    <section className={explorePageCardsStyles.explore_section}>
      {/* <!-- explore section card --> */}
      <div className={explorePageCardsStyles.card_group_row}>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-1.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-2.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Buy Now</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Buy Now</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Buy Now</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-7.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-8.jpg" alt="" />
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-9.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 1 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 1 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-2.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 1 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 1 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 2 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 2 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 2 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 2 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 3 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 3 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 3 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 3 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-7.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 4 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 4 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-8.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 4 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-9.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 4 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-1.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 5 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 5 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-2.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 5 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 5 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 6 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 6 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 6 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 6 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-8.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        {/* 7 */}
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 7 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 7 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-1.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
        <div className={`${explorePageCardsStyles.card_row} ${currentPage === 7 ? "block" : "hidden"}`}>
          <div className={explorePageCardsStyles.card_image_row}>
            <img src="images/commonCard1/card-9.jpg" alt="" />`
          </div>
          <div className={explorePageCardsStyles.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={explorePageCardsStyles.reminder_number}>24</small>
            <small className={explorePageCardsStyles.reminder_alpha}>d</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>04</small>
            <small className={explorePageCardsStyles.reminder_alpha}>h</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>12</small>
            <small className={explorePageCardsStyles.reminder_alpha}>m</small>
            <div className={explorePageCardsStyles.vl}></div>
            <small className={explorePageCardsStyles.reminder_number}>02</small>
            <small className={explorePageCardsStyles.reminder_alpha_s}>s</small>
          </div>
          <div className={explorePageCardsStyles.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={explorePageCardsStyles.card_top_row}>
            <div className={explorePageCardsStyles.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={explorePageCardsStyles.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={explorePageCardsStyles.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={explorePageCardsStyles.card_title_row}>
            Morganitho Arts
          </h1>
          <div className={explorePageCardsStyles.card_profile_row}>
            <div className={explorePageCardsStyles.card_profile_1}>
              <img src="images/profile/profile-7.jpg" alt="" />
              <p className={explorePageCardsStyles.profile_name}>
                @ james_alex01
              </p>
            </div>
            <div className={explorePageCardsStyles.profile_2}>
              <div className={explorePageCardsStyles.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={explorePageCardsStyles.new_bid}>
                <p className={explorePageCardsStyles.profile_name}>New Bid:</p>
                <p className={explorePageCardsStyles.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={explorePageCardsStyles.bottom_title_row}>Place Bid</h3>
        </div>
      </div>
      <PaginationBtn goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} renderPageNumbers={renderPageNumbers} />
    </section>
  );
};

export default ExploreCards;