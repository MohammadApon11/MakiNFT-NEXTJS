"use client";
import Home2Nav from "@/components/shared/Navbars/Home2Nav";
import React, { useEffect, useState } from "react";
import HeroStyles from "../../styles/home-2/home2Hero.module.css";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersRectangle } from "@fortawesome/free-solid-svg-icons";

const HeroHome2 = () => {
  const [isMouseIn, setMouseIn] = useState(false);
  const handleMouseEnter = () => {
    setMouseIn(!isMouseIn);
  };
  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  return (
    <>
      <header className={HeroStyles.hero_2}>
        <Home2Nav />
        {/* <!-- hero main content --> */}
        <section className={HeroStyles.hero_2_main_content_container}>
          <div className={HeroStyles.hero_2_main_content}>
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_1.png"
              alt=""
              className={HeroStyles.hero_2_position_1}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_2.png"
              alt=""
              className={HeroStyles.hero_2_position_2}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_3.png"
              alt=""
              className={HeroStyles.hero_2_position_3}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_4.png"
              alt=""
              className={HeroStyles.hero_2_position_4}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_5.png"
              alt=""
              className={`${HeroStyles.hero_2_position_5} ${
                isMouseIn && HeroStyles.hover_effect_vecotr
              }`}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_6.png"
              alt=""
              className={HeroStyles.hero_2_position_6}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_7.png"
              alt=""
              className={HeroStyles.hero_2_position_7}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_8.png"
              alt=""
              className={`${HeroStyles.hero_2_position_8_1} ${isMouseIn && HeroStyles.hover_effect_dotteds}`}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_8.png"
              alt=""
              className={`${HeroStyles.hero_2_position_8_2} ${isMouseIn && HeroStyles.hover_effect_dotteds}`}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_9.png"
              alt=""
              className={`${HeroStyles.hero_2_position_9} ${isMouseIn && HeroStyles.hover_effect_vector_right}`}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_10.png"
              alt=""
              className={HeroStyles.hero_2_position_10}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/position_11.png"
              alt=""
              className={HeroStyles.hero_2_position_11}
            />
            <img
              src="images/heroBg&footerBg/home-2-hero&footer/img-shape.jpg"
              alt=""
              className={HeroStyles.hero_2_position_image_shape}
            />
            <div className={HeroStyles.hero_left}>
              <h4 className={HeroStyles.hero_2_subtitle}>
                Create & Sell NFT Item
              </h4>
              <h1 className={HeroStyles.hero_2_title}>
                Largest Online <br />
                market to Sell & <br />
                Buy <br />
                NFT Collections.
              </h1>
              <p className={HeroStyles.hero_bottom_title}>
                Lorem ipsum dolor sit amet, consectetu adipiscing <br />
                elituctus nec ullamcorper.
              </p>
              <Link className={HeroStyles.text_decoration_none} href="/explore">
                <button className={HeroStyles.hero_explore_btn}>
                  Explore Items{" "}
                  <i>
                    <BsArrowRightShort />
                  </i>
                </button>
              </Link>
            </div>
            <div className={HeroStyles.hero_image_div_padding_right}>
              <div className={HeroStyles.hero_right}>
                <div
                  className={`${HeroStyles.hero_countdown_1} ${
                    isMouseIn && HeroStyles.hover_effect_left
                  }`}
                >
                  <i>
                    <FaCodepen />
                  </i>
                  <div className={HeroStyles.countdown_3}>
                    <h3 className={HeroStyles.countdown_number_3}>
                      <span className={HeroStyles.counter}>10</span>m+
                    </h3>
                    <p className={HeroStyles.countdown_text_3}>
                      NFT Collections
                    </p>
                  </div>
                </div>
                <div className={`${HeroStyles.hero_countdown_2} ${isMouseIn && HeroStyles.hover_effect_right}`}>
                  <i>
                    <FontAwesomeIcon icon={faUsersRectangle} />
                  </i>
                  <div className={HeroStyles.countdown_3}>
                    <h3 className={HeroStyles.countdown_number_3}>
                      <span className={HeroStyles.counter}>16</span>k+
                    </h3>
                    <p className={HeroStyles.countdown_text_3}>
                      NFT Collections
                    </p>
                  </div>
                </div>
                <img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={HeroStyles.hero_2_image}
                  src="images/heroBg&footerBg/home-2-hero&footer//home-2-hero-img.jpg"
                  alt=""
                />
                <img
                  src="images/heroBg&footerBg/home-2-hero&footer/position_5.png"
                  alt=""
                  className={HeroStyles.hero_2_position_hero}
                />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HeroHome2;
