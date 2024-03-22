"use client";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import topSellerStyles from "../../styles/home-2/Home2TopSeller.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@/components/shared/CustomArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Home2TopSeller = () => {

  const props = {
    title: "Home 2 Top Seller",
  };

  let settings = {
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow {...props} />,
    prevArrow: <PrevArrow {...props} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={topSellerStyles.home_2_top_seller_container}>
      <SectionTitle title="Top Seller" />
      <div className={topSellerStyles.home_2_top_seller_card_container}>
        <Slider {...settings}>
          <div className={topSellerStyles.home_2_top_seller_card}>
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-1.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div className={topSellerStyles.home_2_top_seller_card}>
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-2.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div className={topSellerStyles.home_2_top_seller_card}>
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-3.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div
            className={`${topSellerStyles.home_2_top_seller_card} ${topSellerStyles.three_hide_480_359}`}
          >
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div
            className={`${topSellerStyles.home_2_top_seller_card} ${topSellerStyles.two_hide_768_541}`}
          >
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-3.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div
            className={`${topSellerStyles.home_2_top_seller_card} ${topSellerStyles.one_hide_1024_769} ${topSellerStyles.two_hide_768_541} ${topSellerStyles.three_hide_480_359}`}
          >
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-2.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div
            className={`${topSellerStyles.home_2_top_seller_card} ${topSellerStyles.one_hide_1024_769} ${topSellerStyles.two_hide_768_541} ${topSellerStyles.three_hide_480_359}`}
          >
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
          <div
            className={`${topSellerStyles.home_2_top_seller_card} ${topSellerStyles.one_hide_1024_769} ${topSellerStyles.two_hide_768_541} ${topSellerStyles.three_hide_480_359}`}
          >
            <div className={topSellerStyles.home_2_top_seller_image_container}>
              <img
                className={topSellerStyles.home_2_top_seller_card_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerStyles.home_2_check_div}>
                <i className={topSellerStyles.home_2_check_icon}>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
              </div>
            </div>
            <div className={topSellerStyles.home_2_top_card_description}>
              <h4 className={topSellerStyles.home_2_top_seller_card_title}>
                Carry White
              </h4>
              <small className={topSellerStyles.home_2_card_small_text}>
                214.44 ETH
              </small>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Home2TopSeller;
