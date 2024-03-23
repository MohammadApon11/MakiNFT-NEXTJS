"use client";
import React from "react";
import exploreCardStyle from "../../styles/home-1/liveAuctions.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import ExploreBtn from "@/components/shared/ExploreBtn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/components/shared/SectionTitle";
import { NextArrow, PrevArrow } from "@/components/shared/CustomArrow";
import Link from "next/link";

const LiveAuctions = () => {
  const props = {
    title: "Live Auctions",
  };
  
  let settings = {
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow {...props}/>,
    prevArrow: <PrevArrow {...props}/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    //  <!-- Explore section start from here -->
    <section className={exploreCardStyle.explore_section}>
      {/* <SliderHeader {...props} /> */}
      <SectionTitle {...props} />
      {/* <!-- explore section card --> */}
      <div
        // style={{ width: state.width + "px" }}
        className={`${exploreCardStyle.card_group_row}`}
      >
        <Slider {...settings}>
          <Link href="/singleitem"
            className={`${exploreCardStyle.card_row} ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.left_one_s}`}
          >
            <div className={exploreCardStyle.card_image_row}>
              <img src="images/commonCard1/card-1.jpg" alt="" />
            </div>
            <div className={exploreCardStyle.reminder_row}>
              <img src="images/vectors&icon/watch.png" alt="" />
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
          </Link>
          <Link href="/singleitem"
            className={`${exploreCardStyle.card_row} ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.left_one_s}`}
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
          </Link>
          <Link href="/singleitem"
            className={`${exploreCardStyle.card_row} ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.right_one_s} ${exploreCardStyle.hide_two}`}
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
          </Link>
          <Link href="/singleitem"
            className={`${exploreCardStyle.card_row} ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.right_one_s} ${exploreCardStyle} ${exploreCardStyle.hide_one} ${exploreCardStyle.hide_two}`}
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
          </Link>
          <Link href="/singleitem"
            className={`${exploreCardStyle.card_row} ${exploreCardStyle.all} ${exploreCardStyle.popular} ${exploreCardStyle.right_one_s} ${exploreCardStyle} ${exploreCardStyle.hide_one} ${exploreCardStyle.hide_two}`}
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
          </Link>
        </Slider>
      </div>
      <ExploreBtn />
    </section>
    //   <!-- Explore section end here -->
  );
};

export default LiveAuctions;
