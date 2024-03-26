"use client";
import React from "react";
import HeroOneStyle from "../../styles/home-1/Home1Hero.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import NavWrapper from "@/components/wrapper/NavWrapper";
import Reveal from "@/components/framer-motion/Reveal";
import Counter from "@/components/shared/Counter";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `url("images/heroBg&footerBg/home-1-hero&footer/home-1-hero-bg.png")`,
      }}
      id={HeroOneStyle.hero_1}
    >
      <NavWrapper />
      {/* <!-- hero main content --> */}
      <section className={HeroOneStyle.hero_main_content}>
        <img
          className={HeroOneStyle.hero_1_position_1}
          src="images/vectors&icon/Ellipse-1.png"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_2}
          src="images/vectors&icon/cross.svg"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_3}
          src="images/vectors&icon/Ellipse-2.png"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_4}
          src="images/vectors&icon/rectangle-1.png"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_5}
          src="images/vectors&icon/rectangle-2.png"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_6}
          src="images/vectors&icon/squre.svg"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_8}
          src="images/vectors&icon/triengle.png"
          alt=""
        />
        <img
          className={HeroOneStyle.hero_1_position_7}
          src="images/vectors&icon/rectangle-3.png"
          alt=""
        />
        <div className={HeroOneStyle.hero_description}>
          <h3 className={`mb-3 ${HeroOneStyle.hero_subtile}`}>
            Create & Sell NFT Item.
          </h3>

          <Reveal title={true} bg={"bg-[#5f5fff]"}>
            <h1 className={`${HeroOneStyle.hero_title}`}>
              NFT Marketplace <br />
            </h1>
          </Reveal>
          <Reveal title={true} bg={"bg-[#5f5fff]"}>
            <h1 className={`-mt-3 ${HeroOneStyle.hero_title}`}>
              Explore, Collect{" "}
            </h1>
          </Reveal>
          <Reveal title={true} bg={"bg-[#5f5fff]"}>
            <h1 className={`-mt-3 ${HeroOneStyle.hero_title}`}>or Sell</h1>
          </Reveal>
          <div className={HeroOneStyle.hero_item}>
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
          <div className={HeroOneStyle.hero_btn_group}>
            <a style={{ textDecoration: "none" }} href="/create-item">
              <button className={HeroOneStyle.hero_btn_1}>
                Create Items
                <BsArrowRightShort />
              </button>
            </a>
            <a style={{ textDecoration: "none" }} href="/wallet">
              <button className={HeroOneStyle.hero_btn_2}>
                Add Wallet
                <BsArrowRightShort />
              </button>
            </a>
          </div>
          <div className={HeroOneStyle.countdown_group}>
            <div className={HeroOneStyle.hero_countdown}>
              <p className={HeroOneStyle.countdown_text}>NFTs Artworks</p>
              <h1 className={HeroOneStyle.countdown_number}>
                <span className={HeroOneStyle.counter}>
                  <Counter end={2467} />K
                </span>
              </h1>
            </div>
            <div className={HeroOneStyle.hero_countdown}>
              <p className={HeroOneStyle.countdown_text}>Live Auction</p>
              <h1 className={HeroOneStyle.countdown_number}>
                <span className={HeroOneStyle.counter}>
                  {" "}
                  <Counter end={1104} />
                </span>
              </h1>
            </div>
            <div className={HeroOneStyle.hero_countdown}>
              <p className={HeroOneStyle.countdown_text}>Creator Earning</p>
              <h1 className={HeroOneStyle.countdown_number}>
                <span className={HeroOneStyle.counter}>
                  <Counter end={444} />M
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className={HeroOneStyle.hero_content_img}>
          <img
            className={HeroOneStyle.hero_image}
            src="images/heroBg&footerBg/home-1-hero&footer/home-1-hero-image.jpg"
            alt=""
          />
          <div className={HeroOneStyle.hero_content_div}>
            <div className={HeroOneStyle.stock}>
              <div className={HeroOneStyle.available}>
                <GiCheckMark />
                <small>Available Stock 4</small>
              </div>
              <div className={HeroOneStyle.love_div}>
                <AiFillHeart />
              </div>
            </div>
            <Reveal title={true} bg={"bg-[#5f5fff]"}>
              <h1 className={HeroOneStyle.hero_content_title}>
                Creative White Lady
              </h1>
            </Reveal>
            <div className={HeroOneStyle.profile_div}>
              <div className={HeroOneStyle.hero_profile_1}>
                <img
                  className={HeroOneStyle.profile_1_image}
                  src="images/profile/profile-6.png"
                  alt=""
                />
                <small className={HeroOneStyle.profile_1_name}>
                  @James_alex01
                </small>
              </div>
              <div className={HeroOneStyle.hero_profile_2}>
                <img src="images/vectors&icon/watch.png" alt="" />
                <div className={HeroOneStyle.profile_2}>
                  <small className={HeroOneStyle.profile_2_name}>
                    New Bid:{" "}
                  </small>
                  <small className={HeroOneStyle.profile_2_ETH}>0.16 ETH</small>
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
