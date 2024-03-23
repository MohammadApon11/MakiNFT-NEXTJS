import NavWrapper from "@/components/wrapper/NavWrapper";
import React from "react";
import heroStyles from "../../styles/home-3/HeroHome3.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroHome3 = () => {
  return (
    <header className={heroStyles.home_3_hero}>
      <NavWrapper />
      <div className={heroStyles.home_3_hero_main_content}>
        <div className={heroStyles.home_2_vector_4}>
          <img
            className={heroStyles.position_1}
            src="images/heroBg&footerBg/home-3-hero&footer/position-1.png"
            alt=""
          />
        </div>
        <div className={heroStyles.home_3_vector_1}>
          <img
            className={heroStyles.position_2}
            src="images/heroBg&footerBg/home-3-hero&footer/position-2.png"
            alt=""
          />
        </div>
        <div className={heroStyles.home_2_vector_2}>
          <img
            className={heroStyles.position_3}
            src="images/heroBg&footerBg/home-3-hero&footer/position-3.png"
            alt=""
          />
        </div>
        <div className={heroStyles.home_2_vector_3}>
          <img
            className={heroStyles.position_4}
            src="images/heroBg&footerBg/home-3-hero&footer/position-4.png"
            alt=""
          />
        </div>
        <img
          className={heroStyles.position_5}
          src="images/heroBg&footerBg/home-3-hero&footer/position-5.png"
          alt=""
        />
        <h1 className={heroStyles.home_3_hero_title}>
          Largest Online marketplace to Sell <br />
          and Buy NFTs.
        </h1>
        <p className={heroStyles.home_3_hero_subtitle}>
          Lorem ipsum dolor sit amet, consectetu adipiscing <br />
          elituctus ullamcorper more elite. Accor <br />
          ding to more be elite.
        </p>
        <div className={heroStyles.home_3_hero_btn_group}>
          <Link href="/explore">
            <button className={heroStyles.explore_item_btn}>
              Explore Items
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </button>
          </Link>
          <Link href="/create-item">
            <button className={heroStyles.create_item_btn}>
              Create Items
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroHome3;
