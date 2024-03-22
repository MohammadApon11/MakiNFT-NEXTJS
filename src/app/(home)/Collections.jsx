import CenterSectionTitle from "@/components/shared/CenterSectionTitle";
import React from "react";
import collectionCardStyle from "../../styles/home-1/collection.module.css";
import { RxCheck } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import ExploreBtn from "@/components/shared/ExploreBtn";

const Collections = () => {
  return (
    <section className={collectionCardStyle.home_1_explore_collection}>
      <CenterSectionTitle title={"Explore Collections"} />
      <div className={collectionCardStyle.home_1_collection_card_group}>
          <div
            className={`${collectionCardStyle.home_3_explore_card} ${collectionCardStyle.left_one_s}`}
          >
            <img
              className={collectionCardStyle.home_1_collection_card_image}
              src="images/commonCard1/card-1.jpg"
              alt=""
            />
            <div
              className={
                collectionCardStyle.home_1_collection_card_profile_container
              }
            >
              <div
                className={
                  collectionCardStyle.home_1_collection_profile_image_container
                }
              >
                <div
                  className={collectionCardStyle.home_1_collection_profile_left}
                >
                  <div
                    className={
                      collectionCardStyle.home_1_collection_profile_image_icon
                    }
                  >
                    <img
                      className={
                        collectionCardStyle.home_1_collection_card_profile_image
                      }
                      src="images/profile/profile-1.jpg"
                      alt=""
                    />
                    <div
                      className={
                        collectionCardStyle.home_1_collection_icon_container
                      }
                    >
                      <RxCheck />
                    </div>
                  </div>
                  <div
                    className={
                      collectionCardStyle.home_1_collection_card_description
                    }
                  >
                    <h4 className={collectionCardStyle.home_1_profile_title}>
                      Creative Arts Collection
                    </h4>
                    <div
                      className={
                        collectionCardStyle.home_1_description_margin_bottom
                      }
                    >
                      <small>Created by:</small>
                      <span>@Chris_Jacobs</span>
                    </div>
                  </div>
                </div>
                <div className={collectionCardStyle.home_1_love_container}>
                  <AiFillHeart />
                  <small>09.5k</small>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${collectionCardStyle.home_3_explore_card} ${collectionCardStyle.two_hide_under_358} ${collectionCardStyle.left_half_s}`}
          >
            <img
              className={collectionCardStyle.home_1_collection_card_image}
              src="images/commonCard1/card-2.jpg"
              alt=""
            />
            <div
              className={
                collectionCardStyle.home_1_collection_card_profile_container
              }
            >
              <div
                className={
                  collectionCardStyle.home_1_collection_profile_image_container
                }
              >
                <div
                  className={collectionCardStyle.home_1_collection_profile_left}
                >
                  <div
                    className={
                      collectionCardStyle.home_1_collection_profile_image_icon
                    }
                  >
                    <img
                      className={
                        collectionCardStyle.home_1_collection_card_profile_image
                      }
                      src="images/profile/profile-3.jpg"
                      alt=""
                    />
                    <div
                      className={
                        collectionCardStyle.home_1_collection_icon_container
                      }
                    >
                      <RxCheck />
                    </div>
                  </div>
                  <div
                    className={
                      collectionCardStyle.home_1_collection_card_description
                    }
                  >
                    <h4 className={collectionCardStyle.home_1_profile_title}>
                      Creative Arts Collection
                    </h4>
                    <div
                      className={
                        collectionCardStyle.home_1_description_margin_bottom
                      }
                    >
                      <small>Created by:</small>
                      <span>@Chris_Jacobs</span>
                    </div>
                  </div>
                </div>
                <div className={collectionCardStyle.home_1_love_container}>
                  <AiFillHeart />
                  <small>09.5k</small>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${collectionCardStyle.home_3_explore_card} ${collectionCardStyle.one_hide_668_541} ${collectionCardStyle.two_hide_under} ${collectionCardStyle.right_half_s}`}
          >
            <img
              className={collectionCardStyle.home_1_collection_card_image}
              src="images/commonCard1/card-3.jpg"
              alt=""
            />
            <div
              className={
                collectionCardStyle.home_1_collection_card_profile_container
              }
            >
              <div
                className={
                  collectionCardStyle.home_1_collection_profile_image_container
                }
              >
                <div
                  className={collectionCardStyle.home_1_collection_profile_left}
                >
                  <div
                    className={
                      collectionCardStyle.home_1_collection_profile_image_icon
                    }
                  >
                    <img
                      className={
                        collectionCardStyle.home_1_collection_card_profile_image
                      }
                      src="images/profile/profile-4.jpg"
                      alt=""
                    />
                    <div
                      className={
                        collectionCardStyle.home_1_collection_icon_container
                      }
                    >
                      <RxCheck />
                    </div>
                  </div>
                  <div
                    className={
                      collectionCardStyle.home_1_collection_card_description
                    }
                  >
                    <h4 className={collectionCardStyle.home_1_profile_title}>
                      Creative Arts Collection
                    </h4>
                    <div
                      className={
                        collectionCardStyle.home_1_description_margin_bottom
                      }
                    >
                      <small>Created by:</small>
                      <span>@Chris_Jacobs</span>
                    </div>
                  </div>
                </div>
                <div className={collectionCardStyle.home_1_love_container}>
                  <AiFillHeart />
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

export default Collections;
