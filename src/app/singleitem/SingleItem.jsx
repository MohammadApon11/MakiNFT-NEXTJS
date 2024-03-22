import React from "react";
import singleItemStyles from "../../styles/singleItem/singleItem.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShareNodes,
  faHeart,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import CardsSingleItem from "./CardsSingleItem";
library.add(faClock);

const SingleItem = () => {
  return (
    <section className={singleItemStyles.single_item_container}>
      {/* <!-- single item main start from here--> */}
      <div className={singleItemStyles.single_item}>
        <div
          className={`${singleItemStyles.single_item_image_container} ${singleItemStyles.left_one_s}`}
        >
          <img
            className={singleItemStyles.single_item_image}
            src="images/single-item/item.jpg"
            alt=""
          />
          <div className={singleItemStyles.single_item_sub_image_group}>
            <img
              className={singleItemStyles.single_item_sub_image}
              src="images/commonCard2/card-1.jpg"
              alt=""
            />
            <img
              className={singleItemStyles.single_item_sub_image}
              src="images/commonCard2/card-2.jpg"
              alt=""
            />
            <img
              className={singleItemStyles.single_item_sub_image}
              src="images/commonCard2/card-3.jpg"
              alt=""
            />
            <img
              className={singleItemStyles.single_item_sub_image}
              src="images/commonCard2/card-4.jpg"
              alt=""
            />
            <img
              className={singleItemStyles.single_item_sub_image}
              src="images/commonCard2/card-3.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${singleItemStyles.single_item_description_container} ${singleItemStyles.right_one_s}`}
        >
          <h1 className={singleItemStyles.single_item_title}>
            Minimal Collection
          </h1>
          <div className={singleItemStyles.single_item_profile_container}>
            <div
              className={singleItemStyles.single_item_profile_image_container}
            >
              <img
                className={singleItemStyles.single_item_profile}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <div className={singleItemStyles.single_item_profile_flex}>
                <div className={singleItemStyles.check_div}>
                  <img src="images/vectors&icon/correct2.png" alt="" />
                </div>
                <span className={singleItemStyles.created_by}>created_by:</span>
                <span className={singleItemStyles.profile_name}>
                  @Chris_jacobs
                </span>
              </div>
            </div>
            <div
              className={singleItemStyles.single_item_profile_icon_container}
            >
              <div className={singleItemStyles.single_item_icon}>
                <i className={singleItemStyles.fa_star}>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              </div>
              <div className={singleItemStyles.single_item_icon}>
                <i className={singleItemStyles.share}>
                  <FontAwesomeIcon icon={faShareNodes} />
                </i>
              </div>
              <div className={singleItemStyles.single_item_icon}>
                <i className={singleItemStyles.fa_heart}>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
            </div>
          </div>
          <div className={singleItemStyles.single_item_about_container}>
            <div className={singleItemStyles.singe_item_about}>
              <span className={singleItemStyles.about_opacity}>Size:</span>
              <span>2400x2400</span>
            </div>
            <div className={singleItemStyles.singe_item_about}>
              <span className={singleItemStyles.about_opacity}>Published:</span>
              <span>02 April,2022</span>
            </div>
            <div className={singleItemStyles.singe_item_about}>
              <span className={singleItemStyles.about_opacity}>
                Collection:
              </span>
              <span>Creative Arts Collection</span>
            </div>
          </div>
          <div className={singleItemStyles.single_item_description}>
            <p>
              Rather which, caches regretting of in on parts thing at far at the
              typically the apprehend who practice date out to change. Impasse.
              Work that the value pink cache such structure do little beacon on
              present hologram more quitting my that steps the decided in turn
              the met and while.
            </p>
          </div>
          <div
            className={singleItemStyles.single_item_progress_and_time_container}
          >
            <div className={singleItemStyles.single_item_progress}>
              <div className={singleItemStyles.progress_image}>
                <img src="images/vectors&icon/progress-2.png" alt="" />
              </div>
              <span className={singleItemStyles.new_bid}>New Bid:</span>
              <span className={singleItemStyles.progress_eth}>0.16ETH</span>
            </div>
            <div className={singleItemStyles.single_item_time_container}>
              <i className={singleItemStyles.fa_clock}>
                <FontAwesomeIcon icon={faClock} />
              </i>
              <div className={singleItemStyles.progrss_time}>
                <span className={singleItemStyles.progress_integer}>24</span>
                <span className={singleItemStyles.progress_string}>d</span>
              </div>
              <div className={singleItemStyles.vl}></div>
              <div className={singleItemStyles.progrss_time}>
                <span className={singleItemStyles.progress_integer}>04</span>
                <span className={singleItemStyles.progress_string}>h</span>
              </div>
              <div className={singleItemStyles.vl}></div>
              <div className={singleItemStyles.progrss_time}>
                <span className={singleItemStyles.progress_integer}>12</span>
                <span className={singleItemStyles.progress_string}>m</span>
              </div>
              <div className={singleItemStyles.vl}></div>
              <div className={singleItemStyles.progrss_time}>
                <span className={singleItemStyles.progress_integer}>02</span>
                <span className={singleItemStyles.progress_string}>s</span>
              </div>
            </div>
          </div>
          <button className={singleItemStyles.single_item_place_btn}>
            <i>
              <FontAwesomeIcon icon={faHammer} />
            </i>{" "}
            Place a Bid
          </button>
          <div className={singleItemStyles.single_item_history_container}>
            <div className={singleItemStyles.single_item_history_info_details}>
              <span>Bid History</span>
              <span>Info</span>
              <span>Details</span>
            </div>
            <div
              className={
                singleItemStyles.single_item_place_history_profile_info
              }
            >
              <div className={singleItemStyles.place_history_profile}>
                <img
                  className={singleItemStyles.single_item_profile}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={singleItemStyles.place_profile_info}>
                  <h3 className={singleItemStyles.place_profile_name}>
                    Merry Morgan
                  </h3>
                  <div className={singleItemStyles.place_and_time}>
                    <span className={singleItemStyles.place_a_bid}>
                      Place a Bid
                    </span>
                    <div className={singleItemStyles.place_time}>
                      <i className={singleItemStyles.fa_clock}>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span className={singleItemStyles.minutes}>
                        30 Minutes Ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={singleItemStyles.place_profile_eth_container}>
                <div className={singleItemStyles.eth_icon}>
                  <img src="images/vectors&icon/progress-2.png" alt="" />
                </div>
                <div className={singleItemStyles.eth_description}>
                  <p className={singleItemStyles.eth_number}>0.16 ETH</p>
                  <p className={singleItemStyles.eth_equal}>=$12.40</p>
                </div>
              </div>
            </div>
            <div
              className={
                singleItemStyles.single_item_place_history_profile_info
              }
            >
              <div className={singleItemStyles.place_history_profile}>
                <img
                  className={singleItemStyles.single_item_profile}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={singleItemStyles.place_profile_info}>
                  <h3 className={singleItemStyles.place_profile_name}>
                    Merry Morgan
                  </h3>
                  <div className={singleItemStyles.place_and_time}>
                    <span className={singleItemStyles.place_a_bid}>
                      Place a Bid
                    </span>
                    <div className={singleItemStyles.place_time}>
                      <i className={singleItemStyles.fa_clock}>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>30 Minutes Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={singleItemStyles.place_profile_eth_container}>
                <div className={singleItemStyles.eth_icon}>
                  <img src="images/vectors&icon/progress-2.png" alt="" />
                </div>
                <div className={singleItemStyles.eth_description}>
                  <p className={singleItemStyles.eth_number}>0.16 ETH</p>
                  <p className={singleItemStyles.eth_equal}>=$12.40</p>
                </div>
              </div>
            </div>
            <div
              className={
                singleItemStyles.single_item_place_history_profile_info
              }
              id={singleItemStyles.border_none}
            >
              <div className={singleItemStyles.place_history_profile}>
                <img
                  className={singleItemStyles.single_item_profile}
                  src="images/profile/profile-1.jpg"
                  alt=""
                />
                <div className={singleItemStyles.place_profile_info}>
                  <h3 className={singleItemStyles.place_profile_name}>
                    Merry Morgan
                  </h3>
                  <div className={singleItemStyles.place_and_time}>
                    <span className={singleItemStyles.place_a_bid}>
                      Place a Bid
                    </span>
                    <div className={singleItemStyles.place_time}>
                      <i className={singleItemStyles.fa_clock}>
                        <FontAwesomeIcon icon={faClock} />
                      </i>
                      <span>30 Minutes Ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={singleItemStyles.place_profile_eth_container}>
                <div className={singleItemStyles.eth_icon}>
                  <img src="images/vectors&icon/progress-2.png" alt="" />
                </div>
                <div className={singleItemStyles.eth_description}>
                  <p className={singleItemStyles.eth_number}>0.16 ETH</p>
                  <p className={singleItemStyles.eth_equal}>=$12.40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- single item main end here--> */}

      {/* <!-- live auctions --> */}
      <CardsSingleItem />
    </section>
  );
};

export default SingleItem;
