import ExploreBtn from "@/components/shared/ExploreBtn";
import React from "react";
import exploreStyles from "../../styles/home-2/Home2ExploreCollections.module.css";
import CenterSectionTitle from "@/components/shared/CenterSectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";

const Home2ExploreCollections = () => {
  return (
    <section className={exploreStyles.home_2_explore_container}>
      <CenterSectionTitle title="Explore Collections" />
      <div className={exploreStyles.home_2_explore_card_group}>
        <div className={`${exploreStyles.home_2_explore_card}`}>
          <img
            className={exploreStyles.home_2_explore_card_image}
            src="images/commonCard1/card-1.jpg"
            alt=""
          />
          <div className={exploreStyles.home_2_explore_sub_image_container}>
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-1.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-2.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-3.jpg"
              alt=""
            />
            <div className={exploreStyles.home_2_sub_image_effect_container}>
              <img
                className={exploreStyles.home_2_explore_sub_image_opacity}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={exploreStyles.home_2_sub_image_effect}>
                <h3 className={exploreStyles.home_2_sub_image_effect_number}>
                  204
                </h3>
                <small className={exploreStyles.home_2_sub_image_effect_text}>
                  Items
                </small>
              </div>
            </div>
          </div>
          <div className={exploreStyles.home_2_explore_card_profile_container}>
            <div
              className={exploreStyles.home_2_explore_profile_image_container}
            >
              <div className={exploreStyles.home_2_explore_profile_left}>
                <div
                  className={exploreStyles.home_2_explore_profile_image_icon}
                >
                  <img
                    className={exploreStyles.home_2_explore_card_profile_image}
                    src="images/profile/profile-3.jpg"
                    alt=""
                  />
                  <div className={exploreStyles.home_2_explore_icon_container}>
                    <i className={exploreStyles.home_2_explore_icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                  </div>
                </div>
                <div className={exploreStyles.home_2_explore_card_description}>
                  <h4 className={exploreStyles.home_2_profile_title}>
                    Creative Arts Collection
                  </h4>
                  <div
                    className={exploreStyles.home_2_description_margin_bottom}
                  >
                    <small>Created by:</small>
                    <span>@Chris_Jacobs</span>
                  </div>
                </div>
              </div>
              <div className={exploreStyles.home_2_love_container}>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>09.5k</small>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${exploreStyles.home_2_explore_card} ${exploreStyles.two_hide_under_358} ${exploreStyles.left_half_s}`}
        >
          <img
            className={exploreStyles.home_2_explore_card_image}
            src="images/commonCard1/card-2.jpg"
            alt=""
          />
          <div className={exploreStyles.home_2_explore_sub_image_container}>
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-1.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-2.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-3.jpg"
              alt=""
            />
            <div className={exploreStyles.home_2_sub_image_effect_container}>
              <img
                className={exploreStyles.home_2_explore_sub_image_opacity}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={exploreStyles.home_2_sub_image_effect}>
                <h3 className={exploreStyles.home_2_sub_image_effect_number}>
                  204
                </h3>
                <small className={exploreStyles.home_2_sub_image_effect_text}>
                  Items
                </small>
              </div>
            </div>
          </div>
          <div className={exploreStyles.home_2_explore_card_profile_container}>
            <div
              className={exploreStyles.home_2_explore_profile_image_container}
            >
              <div className={exploreStyles.home_2_explore_profile_left}>
                <div
                  className={exploreStyles.home_2_explore_profile_image_icon}
                >
                  <img
                    className={exploreStyles.home_2_explore_card_profile_image}
                    src="images/profile/profile-1.jpg"
                    alt=""
                  />
                  <div className={exploreStyles.home_2_explore_icon_container}>
                    <i className={exploreStyles.home_2_explore_icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                  </div>
                </div>
                <div className={exploreStyles.home_2_explore_card_description}>
                  <h4 className={exploreStyles.home_2_profile_title}>
                    Creative Arts Collection
                  </h4>
                  <div
                    className={exploreStyles.home_2_description_margin_bottom}
                  >
                    <small>Created by:</small>
                    <span>@Chris_Jacobs</span>
                  </div>
                </div>
              </div>
              <div className={exploreStyles.home_2_love_container}>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>09.5k</small>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${exploreStyles.home_2_explore_card} ${exploreStyles.one_hide_668_541} ${exploreStyles.two_hide_under_358} ${exploreStyles.right_one_s}`}
        >
          <img
            className={exploreStyles.home_2_explore_card_image}
            src="images/commonCard1/card-3.jpg"
            alt=""
          />
          <div className={exploreStyles.home_2_explore_sub_image_container}>
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-1.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-2.jpg"
              alt=""
            />
            <img
              className={exploreStyles.home_2_explore_sub_image}
              src="images/commonCard2/card-3.jpg"
              alt=""
            />
            <div className={exploreStyles.home_2_sub_image_effect_container}>
              <img
                className={exploreStyles.home_2_explore_sub_image_opacity}
                src="images/commonCard2/card-4.jpg"
                alt=""
              />
              <div className={exploreStyles.home_2_sub_image_effect}>
                <h3 className={exploreStyles.home_2_sub_image_effect_number}>
                  204
                </h3>
                <small className={exploreStyles.home_2_sub_image_effect_text}>
                  Items
                </small>
              </div>
            </div>
          </div>
          <div className={exploreStyles.home_2_explore_card_profile_container}>
            <div
              className={exploreStyles.home_2_explore_profile_image_container}
            >
              <div className={exploreStyles.home_2_explore_profile_left}>
                <div
                  className={exploreStyles.home_2_explore_profile_image_icon}
                >
                  <img
                    className={exploreStyles.home_2_explore_card_profile_image}
                    src="images/profile/profile-3.jpg"
                    alt=""
                  />
                  <div className={exploreStyles.home_2_explore_icon_container}>
                    <i className={exploreStyles.home_2_explore_icon}>
                      <FontAwesomeIcon icon={faCheck} />
                    </i>
                  </div>
                </div>
                <div className={exploreStyles.home_2_explore_card_description}>
                  <h4 className={exploreStyles.home_2_profile_title}>
                    Creative Arts Collection
                  </h4>
                  <div
                    className={exploreStyles.home_2_description_margin_bottom}
                  >
                    <small>Created by:</small>
                    <span>@Chris_Jacobs</span>
                  </div>
                </div>
              </div>
              <div className={exploreStyles.home_2_love_container}>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>09.5k</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreBtn />
    </section>
  );
};

export default Home2ExploreCollections;
