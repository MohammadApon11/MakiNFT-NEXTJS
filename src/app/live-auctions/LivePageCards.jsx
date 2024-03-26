"use client";
import React, { useState } from "react";
import livePageCardsStyles from "../../styles/liveauctions/livePageCards.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faStar,
  faShareNodes,
  faHeart,
  faHammer,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";
import Link from "next/link";
import { TransitionWrapper1 } from "@/components/framer-motion/TransitionWrapper";
library.add(faClock);

const LivePageCards = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <section className={livePageCardsStyles.live_card_container}>
      <div className={livePageCardsStyles.live_card_group}>
        <Link href="singleitem" className={livePageCardsStyles.live_card_area}>
          <TransitionWrapper1 index={1}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-1.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link href="singleitem" className={livePageCardsStyles.live_card_area}>
          <TransitionWrapper1 index={2}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-2.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link href="singleitem" className={livePageCardsStyles.live_card_area}>
          <TransitionWrapper1 index={3}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-3.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link href="singleitem" className={livePageCardsStyles.live_card_area}>
          <TransitionWrapper1 index={4}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-4.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>{" "}
                Available in stock 4
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>Price:</small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faCartShopping} />
                Buy Now
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            !loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={5}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-1.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            !loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={6}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-2.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            !loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={7}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-3.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            !loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={8}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-4.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>{" "}
                Available in stock 4
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>Price:</small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faCartShopping} />
                Buy Now
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        {/* hide cards */}
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={9}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-2.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <FontAwesomeIcon icon={faClock} />
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={10}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-1.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={11}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-4.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>
                Highest bid 0.24ETH
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>
                    New Bid:
                  </small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faHammer} />
                Place Bid
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
        <Link
          href="singleitem"
          className={`${livePageCardsStyles.live_card_area} ${
            loadMore ? "block" : "hidden"
          }`}
        >
          <TransitionWrapper1 index={12}>
            <div className={livePageCardsStyles.card_content}>
              <div className={livePageCardsStyles.card_image_container}>
                <div className={livePageCardsStyles.live_card_image}>
                  <img src="images/commonCard2/card-3.jpg" alt="" />
                </div>
                <div className={livePageCardsStyles.card_effect}>
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <span>
                    24<small>d</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    04<small>h</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    12<small>m</small>
                  </span>
                  <div className={livePageCardsStyles.vl}></div>
                  <span>
                    02<small className={livePageCardsStyles.second}>s</small>
                  </span>
                </div>
              </div>
              <p className={livePageCardsStyles.bid_text}>
                <i className={livePageCardsStyles.up_arrow}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </i>{" "}
                Available in stock 4
              </p>
              <div className={livePageCardsStyles.live_card_title_container}>
                <p className={livePageCardsStyles.live_card_title}>
                  Morganitho
                </p>
                <div className={livePageCardsStyles.live_card_title_icon}>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.star}>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.share}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                  </div>
                  <div
                    className={
                      livePageCardsStyles.live_card_title_icon_container
                    }
                  >
                    <i className={livePageCardsStyles.love}>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={livePageCardsStyles.profile_progress}>
                <div className={livePageCardsStyles.left_profile}>
                  <div className={livePageCardsStyles.profile_image_group}>
                    <div className={livePageCardsStyles.profile_image_div}>
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_image_div} ${livePageCardsStyles.profile_image_div_1}`}
                    >
                      <img
                        className={livePageCardsStyles.profile_image}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className={`${livePageCardsStyles.profile_plus_div} ${livePageCardsStyles.profile_image_div_2}`}
                    >
                      <img
                        className={`${livePageCardsStyles.profile_image_opacity} ${livePageCardsStyles.profile_image_three}`}
                        src="images/profile/profile-2.jpg"
                        alt=""
                      />
                      <small>+</small>
                    </div>
                  </div>
                  <small className={livePageCardsStyles.bids}>12+Bids</small>
                </div>
                <div className={livePageCardsStyles.right_profile}>
                  <div className={livePageCardsStyles.guary_div}>
                    <img src="images/vectors&icon/watch.png" alt="" />
                  </div>
                  <small className={livePageCardsStyles.new_bid}>Price:</small>
                  <small className={livePageCardsStyles.ETH}>0.16ETH</small>
                </div>
              </div>
              <button className={livePageCardsStyles.card_btn}>
                <FontAwesomeIcon icon={faCartShopping} />
                Buy Now
              </button>
            </div>
          </TransitionWrapper1>
        </Link>
      </div>
      <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} />
    </section>
  );
};

export default LivePageCards;
