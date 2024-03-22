"use client";
import React from "react";
import topSellerCardStyles from "../../styles/home-1/topSeller.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "@/components/shared/SectionTitle";
import { NextArrow, PrevArrow } from "@/components/shared/CustomArrow";

const TopSeller = () => {
  const props = {
    title: "Top Seller",
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
    nextArrow: <NextArrow {...props} />,
    prevArrow: <PrevArrow {...props} />,
    responsive: [
      {
        breakpoint: 1024,
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
    <section className={topSellerCardStyles.top_seller}>
      <SectionTitle {...props} />
      <div className={topSellerCardStyles.top_seller_card_container}>
        <Slider {...settings}>
          <div className={topSellerCardStyles.slider_two_in}>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-1.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-2.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={topSellerCardStyles.slider_two_in}>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-3.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={topSellerCardStyles.slider_two_in}>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-1.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-2.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={topSellerCardStyles.slider_two_in}>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-3.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={topSellerCardStyles.slider_two_in}>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-3.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${topSellerCardStyles.top_seller_card} ${topSellerCardStyles.slider_card}`}
            >
              <img
                className={topSellerCardStyles.top_seller_image}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={topSellerCardStyles.top_seller_description}>
                <div className={topSellerCardStyles.top_seller_name_box}>
                  <h1 className={topSellerCardStyles.top_seller_title}>
                    Carry White
                    <img src="images/vectors&icon/correct2.png" alt="" />
                  </h1>
                  <small className={topSellerCardStyles.top_seller_name}>
                    @carry_white
                  </small>
                </div>
                <div className={topSellerCardStyles.top_seller_rating}>
                  <img src="images/vectors&icon/group-1.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    0.44ETH
                  </p>
                  <img src="images/vectors&icon/group-2.png" alt="" />
                  <p className={topSellerCardStyles.top_seller_rating_text}>
                    24 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TopSeller;
