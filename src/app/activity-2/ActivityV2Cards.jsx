"use client";
import React, { useState } from "react";
import activityv2cardStyle from "../../styles/activityv2/activityv2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faUserCheck,
  faTag,
  faArrowsUpDown,
  faListUl,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";

const ActivityV2Cards = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <section className={activityv2cardStyle.activity_two_container}>
      <div className={activityv2cardStyle.activity_card_container}>
        <div className={activityv2cardStyle.card_left}>
          <div className={activityv2cardStyle.activity_card_group}>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.left_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>White Lady</h3>
                  <span className={activityv2cardStyle.card_opacity}>
                    Listing by:{" "}
                  </span>
                  <span className={activityv2cardStyle.card_color}>
                    @marry_Morgan
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>2 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
              </div>
            </div>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.right_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>
                    Stephine Jones
                  </h3>
                  <span className={activityv2cardStyle.card_opacity}>
                    Start following You
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>14 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faUserCheck} />
                </i>
              </div>
            </div>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.left_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-4.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>
                    Mangionitho Arts
                  </h3>
                  <div className={activityv2cardStyle.card_small_text}>
                    <span className={activityv2cardStyle.card_opacity}>
                      Purchased By:{" "}
                    </span>
                    <span className={activityv2cardStyle.card_color}>
                      @Marry_Morgan
                    </span>
                    <span className={activityv2cardStyle.card_opacity}>
                      for{" "}
                    </span>
                    <span className={activityv2cardStyle.card_color}>
                      0.76ETH
                    </span>
                    <span className={activityv2cardStyle.card_opacity}>
                      From
                    </span>
                    <span className={activityv2cardStyle.card_color}>
                      @Alex_Tomas
                    </span>
                  </div>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>20 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
              </div>
            </div>
            {/* when hidden card show then this cards will hide */}
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.right_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>
                    Marry Morgan
                  </h3>
                  <span className={activityv2cardStyle.card_opacity}>
                    Unfollowd You{" "}
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>24 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faUserCheck} />
                </i>
              </div>
            </div>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.left_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-4.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>Black Sheep</h3>
                  <span className={activityv2cardStyle.card_color}>
                    @Marry_Morgan{" "}
                  </span>
                  <span className={activityv2cardStyle.card_opacity}>
                    bid one of your item:{" "}
                  </span>
                  <span className={activityv2cardStyle.card_color}>
                    Back Sheep{" "}
                  </span>
                  <span className={activityv2cardStyle.card_opacity}>for </span>
                  <span className={activityv2cardStyle.card_color}>
                    0.44ETH
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>2 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
              </div>
            </div>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.one_hide_1024_769} ${activityv2cardStyle.right_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>
                    Creative Arts Mimo
                  </h3>
                  <span className={activityv2cardStyle.card_opacity}>
                    Listing by:{" "}
                  </span>
                  <span className={activityv2cardStyle.card_color}>
                    @Marry_Morgan
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>30 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faUserCheck} />
                </i>
              </div>
            </div>
            <div
              className={`${activityv2cardStyle.activity_card} ${activityv2cardStyle.one_hide_1400_1201} ${activityv2cardStyle.left_one_s}`}
            >
              <div className={activityv2cardStyle.card_profile}>
                <img
                  className={activityv2cardStyle.activity_card_image}
                  src="images/profile/profile-4.jpg"
                  alt=""
                />
                <div className={activityv2cardStyle.activity_card_description}>
                  <h3 className={activityv2cardStyle.card_name}>
                    Earth of Black
                  </h3>
                  <span className={activityv2cardStyle.card_opacity}>
                    Purchased by:{" "}
                  </span>
                  <span className={activityv2cardStyle.card_color}>
                    @Marry_Morgan{" "}
                  </span>
                  <span className={activityv2cardStyle.card_opacity}>for </span>
                  <span className={activityv2cardStyle.card_color}>
                    0.78ETH{" "}
                  </span>
                  <span className={activityv2cardStyle.card_opacity}>
                    from{" "}
                  </span>
                  <span className={activityv2cardStyle.card_color}>
                    @Ales_Tomas
                  </span>
                  <div className={activityv2cardStyle.card_timing}>
                    <i>
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <span>40 Minutes Ago</span>
                  </div>
                </div>
              </div>
              <div className={activityv2cardStyle.card_icon}>
                <i>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </i>
              </div>
            </div>
          </div>
          <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} />
        </div>
        <div className={`${activityv2cardStyle.activity_btn_container} ${activityv2cardStyle.card_right}`}>
          <div className={activityv2cardStyle.activity_btn_group}>
            <button className={activityv2cardStyle.filter_btn}>
              <i>
                <FontAwesomeIcon icon={faBorderAll} />
              </i>{" "}
              All
            </button>
            <button className={activityv2cardStyle.filter_btn}>
              <i>
                <FontAwesomeIcon icon={faListUl} />
              </i>{" "}
              Listing
            </button>
            <button className={activityv2cardStyle.filter_btn}>
              <i>
                <FontAwesomeIcon icon={faUserCheck} />
              </i>{" "}
              Following
            </button>
            <button className={activityv2cardStyle.filter_btn}>
              <i>
                <FontAwesomeIcon icon={faArrowsUpDown} />
              </i>{" "}
              Biding
            </button>
            <button className={`${activityv2cardStyle.filter_btn} ${activityv2cardStyle.filter_btn_5}`}>
              <i>
                <FontAwesomeIcon icon={faUserXmark} />
              </i>{" "}
              Unfollow
            </button>
            <button className={`${activityv2cardStyle.filter_btn} ${activityv2cardStyle.filter_btn_5}`}>
              <i>
                <FontAwesomeIcon icon={faTag} />
              </i>{" "}
              Sale
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityV2Cards;
