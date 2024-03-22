"use client";
import Navbar from "@/components/shared/Navbars/Navbar";
import React from "react";
import footerOneStyle from "../../styles/home-1/Home1Hero.module.css";
import { usePathname } from "next/navigation";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import NavWrapper from "@/components/wrapper/NavWrapper";

const Hero = () => {
  const currentPath = usePathname();
  return (
    <header
      style={{
        backgroundImage: `url("images/heroBg&footerBg/home-1-hero&footer/home-1-hero-bg.png")`,
      }}
      id={footerOneStyle.hero_1}
    >
      <NavWrapper />
      {/* <!-- hero main content --> */}
      <section className={footerOneStyle.hero_main_content}>
        <img
          className={footerOneStyle.hero_1_position_1}
          src="images/vectors&icon/Ellipse-1.png"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_2}
          src="images/vectors&icon/cross.svg"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_3}
          src="images/vectors&icon/Ellipse-2.png"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_4}
          src="images/vectors&icon/rectangle-1.png"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_5}
          src="images/vectors&icon/rectangle-2.png"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_6}
          src="images/vectors&icon/squre.svg"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_8}
          src="images/vectors&icon/triengle.png"
          alt=""
        />
        <img
          className={footerOneStyle.hero_1_position_7}
          src="images/vectors&icon/rectangle-3.png"
          alt=""
        />
        <div className={footerOneStyle.hero_description}>
          <h3 className={footerOneStyle.hero_subtile}>
            Create & Sell NFT Item.
          </h3>
          <h1 className={footerOneStyle.hero_title}>
            NFT Marketplace <br />
            Explore, Collect <br />
            or Sell
          </h1>
          <div className={footerOneStyle.hero_item}>
            <p>
              <a href="/create-item">Create</a>
            </p>
            <IoIosArrowForward />
            <p>
              <a href="/explore">Explore</a>
            </p>
            <IoIosArrowForward />
            <p>Sell & Earn</p>
          </div>
          <div className={footerOneStyle.hero_btn_group}>
            <a style={{ textDecoration: "none" }} href="/create-item">
              <button className={footerOneStyle.hero_btn_1}>
                Create Items
                <BsArrowRightShort />
              </button>
            </a>
            <a style={{ textDecoration: "none" }} href="/wallet">
              <button className={footerOneStyle.hero_btn_2}>
                Add Wallet
                <BsArrowRightShort />
              </button>
            </a>
          </div>
          <div className={footerOneStyle.countdown_group}>
            <div className={footerOneStyle.hero_countdown}>
              <p className={footerOneStyle.countdown_text}>NFTs Artworks</p>
              <h1 className={footerOneStyle.countdown_number}>
                <span className={footerOneStyle.counter}>2467</span>K
              </h1>
            </div>
            <div className={footerOneStyle.hero_countdown}>
              <p className={footerOneStyle.countdown_text}>Live Auction</p>
              <h1 className={footerOneStyle.countdown_number}>
                <span className={footerOneStyle.counter}>1104</span>
              </h1>
            </div>
            <div className={footerOneStyle.hero_countdown}>
              <p className={footerOneStyle.countdown_text}>Creator Earning</p>
              <h1 className={footerOneStyle.countdown_number}>
                <span className={footerOneStyle.counter}>444</span>M
              </h1>
            </div>
          </div>
        </div>
        <div className={footerOneStyle.hero_content_img}>
          <img
            className={footerOneStyle.hero_image}
            src="images/heroBg&footerBg/home-1-hero&footer/home-1-hero-image.jpg"
            alt=""
          />
          <div className={footerOneStyle.hero_content_div}>
            <div className={footerOneStyle.stock}>
              <div className={footerOneStyle.available}>
                <GiCheckMark />
                <small>Available Stock 4</small>
              </div>
              <div className={footerOneStyle.love_div}>
                <AiFillHeart />
              </div>
            </div>
            <h1 className={footerOneStyle.hero_content_title}>
              Creative White Lady
            </h1>
            <div className={footerOneStyle.profile_div}>
              <div className={footerOneStyle.hero_profile_1}>
                <img
                  className={footerOneStyle.profile_1_image}
                  src="images/profile/profile-6.png"
                  alt=""
                />
                <small className={footerOneStyle.profile_1_name}>
                  @James_alex01
                </small>
              </div>
              <div className={footerOneStyle.hero_profile_2}>
                <img src="images/vectors&icon/watch.png" alt="" />
                <div className={footerOneStyle.profile_2}>
                  <small className={footerOneStyle.profile_2_name}>
                    New Bid:{" "}
                  </small>
                  <small className={footerOneStyle.profile_2_ETH}>
                    0.16 ETH
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
