"use client";
import React, { useState } from "react";
import exploreCardStyle from "../../styles/home-1/ExploreCard.module.css";
import SectionTitle from "@/components/shared/SectionTitle";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import ExploreBtn from "@/components/shared/ExploreBtn";

const ExploreCardSection = () => {
  const [filterProduct, setFilterProduct] = useState("all");
  const handleFilter = (productName) => {
    setFilterProduct(productName);
  };
  return (
    //  <!-- Explore section start from here -->
    <section className={exploreCardStyle.explore_section}>
      {/* <!-- explore section header --> */}
      <div className={exploreCardStyle.explore_header}>
        <SectionTitle title={"Explore Items"} />
        <div className={exploreCardStyle.explore_btn_group}>
          <button
            className={`${exploreCardStyle.explore_filter_btn}  ${filterProduct === "all" && exploreCardStyle.active}`}
            id={exploreCardStyle.all}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
          <button
            className={`${exploreCardStyle.explore_filter_btn}  ${filterProduct === "popular" && exploreCardStyle.active}`}
            id={exploreCardStyle.popular}
            onClick={() => handleFilter("popular")}
          >
            Popular
          </button>
          <button
            className={`${exploreCardStyle.explore_filter_btn}  ${filterProduct === "newest" && exploreCardStyle.active}`}
            id={exploreCardStyle.newest}
            onClick={() => handleFilter("newest")}
          >
            Newest
          </button>
        </div>
      </div>
      {/* <!-- explore section card --> */}
      <div className={exploreCardStyle.card_group_row}>
        <div
          className={`${exploreCardStyle.card_row} ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.hide
              : exploreCardStyle.hide
          } ${exploreCardStyle.all} ${exploreCardStyle.popular} ${
            exploreCardStyle.left_one_s
          }`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-1.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.show
              : exploreCardStyle.hide
          }
          ${exploreCardStyle.all} ${exploreCardStyle.popular} ${
            exploreCardStyle.left_one_s
          }`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-2.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.hide
              : exploreCardStyle.show
          }
          ${exploreCardStyle.all} ${exploreCardStyle.popular} ${
            exploreCardStyle.right_one_s
          }`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-3.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Buy Now</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.hide
              : exploreCardStyle.show
          }
          ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.right_one_s}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-4.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Buy Now</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.hide
              : exploreCardStyle.show
          }
          ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.newest} ${exploreCardStyle.left_one_s}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Buy Now</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.show
              : exploreCardStyle.hide
          }
          ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.newest} ${exploreCardStyle.left_half_s}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-6.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.hide
              : exploreCardStyle.show
          }
          ${exploreCardStyle.all} ${exploreCardStyle.explore_card_hide} ${exploreCardStyle.newest} ${exploreCardStyle.right_one_s}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-7.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${
            filterProduct === "all"
              ? exploreCardStyle.show
              : filterProduct === "popular"
              ? exploreCardStyle.show
              : exploreCardStyle.hide
          }
          ${exploreCardStyle.all} ${exploreCardStyle.explore_card_hide} ${exploreCardStyle.newest} ${exploreCardStyle.right_one_s}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-8.jpg" alt="" />
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
        <div
          className={`${exploreCardStyle.card_row}
          ${exploreCardStyle.explore_card_hide} ${exploreCardStyle.explore_card_single_hide}`}
        >
          <div className={exploreCardStyle.card_image_row}>
            <img src="images/commonCard1/card-9.jpg" alt="" />`
          </div>
          <div className={exploreCardStyle.reminder_row}>
            <img src="images/nav/watch.png" alt="" />
            <small className={exploreCardStyle.reminder_number}>24</small>
            <small className={exploreCardStyle.reminder_alpha}>d</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>04</small>
            <small className={exploreCardStyle.reminder_alpha}>h</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>12</small>
            <small className={exploreCardStyle.reminder_alpha}>m</small>
            <div className={exploreCardStyle.vl}></div>
            <small className={exploreCardStyle.reminder_number}>02</small>
            <small className={exploreCardStyle.reminder_alpha_s}>s</small>
          </div>
          <div className={exploreCardStyle.three_dot}>
            <BsThreeDotsVertical />
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className={exploreCardStyle.card_top_row}>
            <div className={exploreCardStyle.card_profile}>
              <HiOutlineArrowNarrowUp />
              <i className="fa-solid fa-arrow-up-long"></i>
              <p className={exploreCardStyle.card_top_title}>
                Highest bid 0.24ETH
              </p>
            </div>
            <div className={exploreCardStyle.love_div}>
              <AiFillHeart />
              <i className="fa-solid fa_heart"></i>
            </div>
          </div>
          <h1 className={exploreCardStyle.card_title_row}>Morganitho Arts</h1>
          <div className={exploreCardStyle.card_profile_row}>
            <div className={exploreCardStyle.card_profile_1}>
              <img
                src="images/profile/profile-7.jpg"
                alt=""
              />
              <p className={exploreCardStyle.profile_name}>@ james_alex01</p>
            </div>
            <div className={exploreCardStyle.profile_2}>
              <div className={exploreCardStyle.profile_2_div}>
                <img src="images/vectors&icon/watch.png" alt="" />
              </div>
              <div className={exploreCardStyle.new_bid}>
                <p className={exploreCardStyle.profile_name}>New Bid:</p>
                <p className={exploreCardStyle.new_bit_text}>0.16ETH</p>
              </div>
            </div>
          </div>
          <h3 className={exploreCardStyle.bottom_title_row}>Place Bid</h3>
        </div>
      </div>
      <ExploreBtn />
    </section>
    //   <!-- Explore section end here -->
  );
};

export default ExploreCardSection;
