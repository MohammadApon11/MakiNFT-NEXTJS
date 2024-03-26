import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faStar,
  faPlus,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import liveStyles from "../../styles/home-2/Home2LiveAuctions.module.css";
import TitleBtnHeader from "@/components/shared/TitleBtnHeader";
import Link from "next/link";
import { TransitionWrapper2 } from "@/components/framer-motion/TransitionWrapper";

const Home2LiveAuctions = () => {
  return (
    <section className={liveStyles.recent_container}>
      <TitleBtnHeader
        path={"/live-auctions"}
        title="Live Auctions"
        btnText="Explore More"
      />
      {/* <!-- explore artwork v2 card almost same that why v2 html copy here --> */}
      <div className={liveStyles.filter_card_group}>
        <TransitionWrapper2 index={1}>
          <Link
            href="singleitem"
            className={`${liveStyles.card_area} ${liveStyles.down_half_s}`}
          >
            <div className={liveStyles.card_content}>
              <img
                className={liveStyles.filter_card_image}
                src="images/commonCard1/card-1.jpg"
                alt=""
              />
              <div className={liveStyles.card_text_content}>
                <div>
                  <div className={liveStyles.card_title_container}>
                    <p className={liveStyles.filter_card_title}>
                      Morganitho Arts
                    </p>
                    <div className={liveStyles.card_title_icon}>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.love}>
                          <FontAwesomeIcon icon={faHeart} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.share}>
                          <FontAwesomeIcon icon={faShareNodes} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.star}>
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className={liveStyles.profile_progress}>
                    <div className={liveStyles.left_profile}>
                      <div className={liveStyles.profile_image_group}>
                        <div className={liveStyles.profile_image_div}>
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`${liveStyles.profile_image_div} ${liveStyles.profile_image_div_1}`}
                        >
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className={`${liveStyles.profile_plus_div}`}>
                          <img
                            className={`${liveStyles.profile_image_opacity} ${liveStyles.profile_image_three}`}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                          <i className="">
                            <FontAwesomeIcon icon={faPlus} />
                          </i>
                        </div>
                      </div>
                      <small className={liveStyles.bids}>12+Bids</small>
                    </div>
                    <div className={liveStyles.right_profile}>
                      <div className={liveStyles.guary_div}>
                        <img src="images/vectors&icon/watch.png" alt="" />
                      </div>
                      <small className={liveStyles.new_bid}>New Bid:</small>
                      <small className={liveStyles.ETH}>0.16ETH</small>
                    </div>
                  </div>
                  <div className={liveStyles.card_btn_timing}>
                    <button className={liveStyles.card_btn}>
                      <i>
                        <FontAwesomeIcon icon={faHammer} />
                      </i>
                      Place Bid
                    </button>
                    <div className={liveStyles.home_2_card_effect}>
                      <span>
                        24<small>D</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        04<small>H</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        12<small>M</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        02<small className={liveStyles.second}>s</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </TransitionWrapper2>
        <TransitionWrapper2 index={3}>
          <Link
            href="singleitem"
            className={`${liveStyles.card_area} ${liveStyles.two_hide_under_358} ${liveStyles.down_half_s}`}
          >
            <div
              className={`${liveStyles.card_content} ${liveStyles.two_hide_under_358}`}
            >
              <img
                className={liveStyles.filter_card_image}
                src="images/commonCard1/card-2.jpg"
                alt=""
              />
              <div className={liveStyles.card_text_content}>
                <div>
                  <div className={liveStyles.card_title_container}>
                    <p className={liveStyles.filter_card_title}>
                      Morganitho Arts
                    </p>
                    <div className={liveStyles.card_title_icon}>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.love}>
                          <FontAwesomeIcon icon={faHeart} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.share}>
                          <FontAwesomeIcon icon={faShareNodes} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.star}>
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className={liveStyles.profile_progress}>
                    <div className={liveStyles.left_profile}>
                      <div className={liveStyles.profile_image_group}>
                        <div className={liveStyles.profile_image_div}>
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`${liveStyles.profile_image_div} ${liveStyles.profile_image_div_1}`}
                        >
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`${liveStyles.profile_plus_div} ${liveStyles.profile_image_div_2}`}
                        >
                          <img
                            className={`${liveStyles.profile_image_opacity} ${liveStyles.profile_image_three}`}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                          <i className="">
                            <FontAwesomeIcon icon={faPlus} />
                          </i>
                        </div>
                      </div>
                      <small className={liveStyles.bids}>12+Bids</small>
                    </div>
                    <div className={liveStyles.right_profile}>
                      <div className={liveStyles.guary_div}>
                        <img src="images/vectors&icon/watch.png" alt="" />
                      </div>
                      <small className={liveStyles.new_bid}>New Bid:</small>
                      <small className={liveStyles.ETH}>0.16ETH</small>
                    </div>
                  </div>
                  <div className={liveStyles.card_btn_timing}>
                    <button className={liveStyles.card_btn}>
                      <i>
                        <FontAwesomeIcon icon={faHammer} />
                      </i>
                      Place Bid
                    </button>
                    <div className={liveStyles.home_2_card_effect}>
                      <span>
                        24<small>D</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        04<small>H</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        12<small>M</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        02<small className={liveStyles.second}>s</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </TransitionWrapper2>
        <TransitionWrapper2 index={5}>
          <Link
            href="singleitem"
            className={`${liveStyles.card_area} ${liveStyles.one_hide_768_541} ${liveStyles.down_half_s}`}
          >
            <div
              className={`${liveStyles.card_content} ${liveStyles.one_hide_768_541} ${liveStyles.two_hide_under_358}`}
            >
              <img
                className={liveStyles.filter_card_image}
                src="images/commonCard1/card-3.jpg"
                alt=""
              />
              <div className={liveStyles.card_text_content}>
                <div>
                  <div className={liveStyles.card_title_container}>
                    <p className={liveStyles.filter_card_title}>
                      Morganitho Arts
                    </p>
                    <div className={liveStyles.card_title_icon}>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.love}>
                          <FontAwesomeIcon icon={faHeart} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.share}>
                          <FontAwesomeIcon icon={faShareNodes} />
                        </i>
                      </div>
                      <div className={liveStyles.card_title_icon_container}>
                        <i className={liveStyles.star}>
                          <FontAwesomeIcon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className={liveStyles.profile_progress}>
                    <div className={liveStyles.left_profile}>
                      <div className={liveStyles.profile_image_group}>
                        <div className={liveStyles.profile_image_div}>
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`${liveStyles.profile_image_div} ${liveStyles.profile_image_div_1}`}
                        >
                          <img
                            className={liveStyles.profile_image}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className={`${liveStyles.profile_image_div} ${liveStyles.profile_image_div_2}`}
                        >
                          <img
                            className={`${liveStyles.profile_image_div} ${liveStyles.profile_image_three}`}
                            src="images/profile/profile-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <small className={liveStyles.bids}>12+Bids</small>
                    </div>
                    <div className={liveStyles.right_profile}>
                      <div className={liveStyles.guary_div}>
                        <img src="images/vectors&icon/watch.png" alt="" />
                      </div>
                      <small className={liveStyles.new_bid}>New Bid:</small>
                      <small className={liveStyles.ETH}>0.16ETH</small>
                    </div>
                  </div>
                  <div className={liveStyles.card_btn_timing}>
                    <button className={liveStyles.card_btn}>
                      <i>
                        <FontAwesomeIcon icon={faHammer} />
                      </i>
                      Place Bid
                    </button>
                    <div className={liveStyles.home_2_card_effect}>
                      <span>
                        24<small>D</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        04<small>H</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        12<small>M</small>
                      </span>
                      <div className={liveStyles.vl}></div>
                      <span>
                        02<small className={liveStyles.second}>s</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </TransitionWrapper2>
      </div>
    </section>
  );
};

export default Home2LiveAuctions;
