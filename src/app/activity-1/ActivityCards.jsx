"use client";
import React, { useState } from "react";
import activityCardStles from "../../styles/activityv1/activityv1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";
import RightLeft from "@/components/framer-motion/RightLeft";

const ActivityCards = () => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <section className={activityCardStles.activity_one_container}>
      <div className={activityCardStles.activity_card_container}>
        <div className={activityCardStles.card_left}>
          <div className={`${activityCardStles.activity_card_group}`}>
            <RightLeft side={"-120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.left_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-1.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>White Lady</h3>
                    <span className={activityCardStles.card_opacity}>
                      Listing by:{" "}
                    </span>
                    <span className={activityCardStles.card_color}>
                      @marry_Morgan
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>2 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </div>
              </div>
            </RightLeft>
            <RightLeft side={"120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.right_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-1.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>
                      Stephine Jones
                    </h3>
                    <span className={activityCardStles.card_opacity}>
                      Start following You
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>14 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faUserCheck} />
                  </i>
                </div>
              </div>
            </RightLeft>
            <RightLeft side={"-120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.left_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-4.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>
                      Mangionitho Arts
                    </h3>
                    <div className={activityCardStles.card_small_text}>
                      <span className={activityCardStles.card_opacity}>
                        Purchased By:{" "}
                      </span>
                      <span className={activityCardStles.card_color}>
                        @Marry_Morgan
                      </span>
                      <span className={activityCardStles.card_opacity}>
                        for{" "}
                      </span>
                      <span className={activityCardStles.card_color}>
                        0.76ETH
                      </span>
                      <span className={activityCardStles.card_opacity}>
                        From
                      </span>
                      <span className={activityCardStles.card_color}>
                        @Alex_Tomas
                      </span>
                    </div>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>20 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </div>
              </div>
            </RightLeft>
            {/* whene hidden card show then this cards will hide */}
            <RightLeft side={"120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.right_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-1.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>
                      Marry Morgan
                    </h3>
                    <span className={activityCardStles.card_opacity}>
                      Unfollowd You{" "}
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>24 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faUserCheck} />
                  </i>
                </div>
              </div>
            </RightLeft>
            <RightLeft side={"-120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.left_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-4.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>Black Sheep</h3>
                    <span className={activityCardStles.card_color}>
                      @Marry_Morgan{" "}
                    </span>
                    <span className={activityCardStles.card_opacity}>
                      bid one of your item:{" "}
                    </span>
                    <span className={activityCardStles.card_color}>
                      Back Sheep{" "}
                    </span>
                    <span className={activityCardStles.card_opacity}>for </span>
                    <span className={activityCardStles.card_color}>
                      0.44ETH
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>2 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </div>
              </div>
            </RightLeft>
            <RightLeft side={"120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.one_hide_1024_769} ${activityCardStles.right_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-1.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>
                      Creative Arts Mimo
                    </h3>
                    <span className={activityCardStles.card_opacity}>
                      Listing by:{" "}
                    </span>
                    <span className={activityCardStles.card_color}>
                      @Marry_Morgan
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>30 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faUserCheck} />
                  </i>
                </div>
              </div>
            </RightLeft>
            <RightLeft side={"-120%"} duration={0.6}>
              <div
                className={`${activityCardStles.activity_card} ${activityCardStles.one_hide_1400_1201} ${activityCardStles.left_one_s}`}
              >
                <div className={activityCardStles.card_profile}>
                  <img
                    className={activityCardStles.activity_card_image}
                    src="images/profile/profile-4.jpg"
                    alt=""
                  />
                  <div className={activityCardStles.activity_card_description}>
                    <h3 className={activityCardStles.card_name}>
                      Earth of Black
                    </h3>
                    <span className={activityCardStles.card_opacity}>
                      Purchased by:{" "}
                    </span>
                    <span className={activityCardStles.card_color}>
                      @Marry_Morgan{" "}
                    </span>
                    <span className={activityCardStles.card_opacity}>for </span>
                    <span className={activityCardStles.card_color}>
                      0.78ETH{" "}
                    </span>
                    <span className={activityCardStles.card_opacity}>
                      from{" "}
                    </span>
                    <span className={activityCardStles.card_color}>
                      @Ales_Tomas
                    </span>
                    <div className={activityCardStles.card_timing}>
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>40 Minutes Ago</span>
                    </div>
                  </div>
                </div>
                <div className={activityCardStles.card_icon}>
                  <i>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </i>
                </div>
              </div>
            </RightLeft>
          </div>
          <LoadMoreBtn
            loadMore={loadMore}
            setLoadMore={setLoadMore}
            title={"activity"}
          />
        </div>
        <div
          className={`${activityCardStles.activity_btn_container} ${activityCardStles.card_right} ${activityCardStles.right_one_s}`}
        >
          <h3 className={activityCardStles.filter_title}>Filter</h3>
          <div className={activityCardStles.activity_btn_group}>
            <button className={activityCardStles.filter_btn}>List</button>
            <button className={activityCardStles.filter_btn}>Purchases</button>
            <button className={activityCardStles.filter_btn}>Likes</button>
            <button className={activityCardStles.filter_btn}>Buy</button>
            <button className={activityCardStles.filter_btn}>Sale</button>
            <button className={activityCardStles.filter_btn}>Following</button>
            <button className={activityCardStles.filter_btn}>
              Unfollowing
            </button>
          </div>
          <button className={activityCardStles.clear_btn}>
            Clear all Filter
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityCards;
