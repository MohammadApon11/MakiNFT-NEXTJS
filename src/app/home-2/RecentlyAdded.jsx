import CenterSectionTitle from "@/components/shared/CenterSectionTitle";
import React from "react";
import recentStyles from "../../styles/home-2/RecentlyAdded.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faStar,
  faPlus,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import ExploreBtn from "@/components/shared/ExploreBtn";

const RecentlyAdded = () => {
  return (
    <section className={recentStyles.recent_container}>
      <CenterSectionTitle title="Recently Added" />
      {/* <!-- explore artwork v2 card almost same that why v2 html copy here --> */}
      <div className={recentStyles.filter_card_group}>
        <div
          className={`${recentStyles.card_area} ${recentStyles.down_half_s}`}
        >
          <div className={recentStyles.card_content}>
            <img
              className={recentStyles.filter_card_image}
              src="images/commonCard1/card-1.jpg"
              alt=""
            />
            <div className={recentStyles.card_text_content}>
              <div>
                <div className={recentStyles.card_title_container}>
                  <p className={recentStyles.filter_card_title}>
                    Morganitho Arts
                  </p>
                  <div className={recentStyles.card_title_icon}>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.love}>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.share}>
                        <FontAwesomeIcon icon={faShareNodes} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.star}>
                        <FontAwesomeIcon icon={faStar} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className={recentStyles.profile_progress}>
                  <div className={recentStyles.left_profile}>
                    <div className={recentStyles.profile_image_group}>
                      <div className={recentStyles.profile_image_div}>
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`${recentStyles.profile_image_div} ${recentStyles.profile_image_div_1}`}
                      >
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className={`${recentStyles.profile_plus_div}`}>
                        <img
                          className={`${recentStyles.profile_image_opacity} ${recentStyles.profile_image_three}`}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                        <i className="">
                          <FontAwesomeIcon icon={faPlus} />
                        </i>
                      </div>
                    </div>
                    <small className={recentStyles.bids}>12+Bids</small>
                  </div>
                  <div className={recentStyles.right_profile}>
                    <div className={recentStyles.guary_div}>
                      <img src="images/vectors&icon/watch.png" alt="" />
                    </div>
                    <small className={recentStyles.new_bid}>New Bid:</small>
                    <small className={recentStyles.ETH}>0.16ETH</small>
                  </div>
                </div>
                <div className={recentStyles.card_btn_timing}>
                  <button className={recentStyles.card_btn}>
                    <i>
                      <FontAwesomeIcon icon={faHammer} />
                    </i>
                    Place Bid
                  </button>
                  <div className={recentStyles.home_2_card_effect}>
                    <span>
                      24<small>D</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      04<small>H</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      12<small>M</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      02<small className={recentStyles.second}>s</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${recentStyles.card_area} ${recentStyles.two_hide_under_358} ${recentStyles.down_half_s}`}
        >
          <div
            className={`${recentStyles.card_content} ${recentStyles.two_hide_under_358}`}
          >
            <img
              className={recentStyles.filter_card_image}
              src="images/commonCard1/card-2.jpg"
              alt=""
            />
            <div className={recentStyles.card_text_content}>
              <div>
                <div className={recentStyles.card_title_container}>
                  <p className={recentStyles.filter_card_title}>
                    Morganitho Arts
                  </p>
                  <div className={recentStyles.card_title_icon}>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.love}>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.share}>
                        <FontAwesomeIcon icon={faShareNodes} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.star}>
                        <FontAwesomeIcon icon={faStar} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className={recentStyles.profile_progress}>
                  <div className={recentStyles.left_profile}>
                    <div className={recentStyles.profile_image_group}>
                      <div className={recentStyles.profile_image_div}>
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`${recentStyles.profile_image_div} ${recentStyles.profile_image_div_1}`}
                      >
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`${recentStyles.profile_plus_div} ${recentStyles.profile_image_div_2}`}
                      >
                        <img
                          className={`${recentStyles.profile_image_opacity} ${recentStyles.profile_image_three}`}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                        <i className="">
                          <FontAwesomeIcon icon={faPlus} />
                        </i>
                      </div>
                    </div>
                    <small className={recentStyles.bids}>12+Bids</small>
                  </div>
                  <div className={recentStyles.right_profile}>
                    <div className={recentStyles.guary_div}>
                      <img src="images/vectors&icon/watch.png" alt="" />
                    </div>
                    <small className={recentStyles.new_bid}>New Bid:</small>
                    <small className={recentStyles.ETH}>0.16ETH</small>
                  </div>
                </div>
                <div className={recentStyles.card_btn_timing}>
                  <button className={recentStyles.card_btn}>
                    <i>
                      <FontAwesomeIcon icon={faHammer} />
                    </i>
                    Place Bid
                  </button>
                  <div className={recentStyles.home_2_card_effect}>
                    <span>
                      24<small>D</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      04<small>H</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      12<small>M</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      02<small className={recentStyles.second}>s</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${recentStyles.card_area} ${recentStyles.one_hide_768_541} ${recentStyles.down_half_s}`}
        >
          <div
            className={`${recentStyles.card_content} ${recentStyles.one_hide_768_541} ${recentStyles.two_hide_under_358}`}
          >
            <img
              className={recentStyles.filter_card_image}
              src="images/commonCard1/card-3.jpg"
              alt=""
            />
            <div className={recentStyles.card_text_content}>
              <div>
                <div className={recentStyles.card_title_container}>
                  <p className={recentStyles.filter_card_title}>
                    Morganitho Arts
                  </p>
                  <div className={recentStyles.card_title_icon}>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.love}>
                        <FontAwesomeIcon icon={faHeart} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.share}>
                        <FontAwesomeIcon icon={faShareNodes} />
                      </i>
                    </div>
                    <div className={recentStyles.card_title_icon_container}>
                      <i className={recentStyles.star}>
                        <FontAwesomeIcon icon={faStar} />
                      </i>
                    </div>
                  </div>
                </div>
                <div className={recentStyles.profile_progress}>
                  <div className={recentStyles.left_profile}>
                    <div className={recentStyles.profile_image_group}>
                      <div className={recentStyles.profile_image_div}>
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`${recentStyles.profile_image_div} ${recentStyles.profile_image_div_1}`}
                      >
                        <img
                          className={recentStyles.profile_image}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className={`${recentStyles.profile_image_div} ${recentStyles.profile_image_div_2}`}
                      >
                        <img
                          className={`${recentStyles.profile_image_div} ${recentStyles.profile_image_three}`}
                          src="images/profile/profile-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <small className={recentStyles.bids}>12+Bids</small>
                  </div>
                  <div className={recentStyles.right_profile}>
                    <div className={recentStyles.guary_div}>
                      <img src="images/vectors&icon/watch.png" alt="" />
                    </div>
                    <small className={recentStyles.new_bid}>New Bid:</small>
                    <small className={recentStyles.ETH}>0.16ETH</small>
                  </div>
                </div>
                <div className={recentStyles.card_btn_timing}>
                  <button className={recentStyles.card_btn}>
                    <i>
                      <FontAwesomeIcon icon={faHammer} />
                    </i>
                    Place Bid
                  </button>
                  <div className={recentStyles.home_2_card_effect}>
                    <span>
                      24<small>D</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      04<small>H</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      12<small>M</small>
                    </span>
                    <div className={recentStyles.vl}></div>
                    <span>
                      02<small className={recentStyles.second}>s</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreBtn />
    </section>
  );
};

export default RecentlyAdded;
