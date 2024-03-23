"use client";
import React, { useState } from "react";
import topSellerStyles from "../../styles/home-3/topsellerhome3.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@/components/shared/CustomArrow";
import SectionSubTitleAndTitle from "@/components/shared/sectionsTitle/SectionSubTitleAndTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDroplet,
  faPlus,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";

const TopSellerHome3 = () => {
  const [btnText, setBtnText] = useState("");
  const handleBtnText = (text) => {
    if (!btnText) {
      setBtnText(text);
    }
    if (btnText && btnText === "Followed") {
      setBtnText("Follow");
    }
    if (btnText && btnText === "Follow") {
      setBtnText("Followed");
    }
  };
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
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow {...props} />,
    prevArrow: <PrevArrow {...props} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className={topSellerStyles.top_seller_container}>
        <SectionSubTitleAndTitle title={"Top Seller"} subTitle={"SELLER"} />
        <div className={topSellerStyles.home_3_top_seller_card_container}>
          <Slider {...settings}>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-4.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Follow
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Followed
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-3.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Follow
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Followed
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-3.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Follow
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-4.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Follow
              </button>
            </div>
            <div className={topSellerStyles.top_seller_card}>
              <div className={topSellerStyles.top_seller_image_container}>
                <img
                  className={topSellerStyles.top_seller_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={topSellerStyles.check_icon}>
                  <i className={topSellerStyles.gg_check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </i>
                </div>
              </div>
              <div className={topSellerStyles.top_seller_card_copy}>
                <i>
                  <FontAwesomeIcon icon={faCopy} />
                </i>
                <span>12acB457...5sd</span>
              </div>
              <h4 className={topSellerStyles.top_seller_card_title}>
                Marry Morgean
              </h4>
              <div className={topSellerStyles.top_seller_card_info}>
                <div className={topSellerStyles.info_1}>
                  <i>
                    <FontAwesomeIcon icon={faIntercom} />
                  </i>
                  <span> NFTs: 24</span>
                </div>
                <div className={topSellerStyles.info_2}>
                  <i>
                    <FontAwesomeIcon icon={faDroplet} />
                  </i>
                  <span>Level: 8</span>
                </div>
              </div>
              <button className={topSellerStyles.follow_btn}>
                <i>
                  <FontAwesomeIcon icon={faPlus} />
                </i>
                Follow
              </button>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TopSellerHome3;
