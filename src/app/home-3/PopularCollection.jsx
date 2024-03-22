import React from "react";
import popularStyles from "../../styles/home-3/popularHome3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SectionSubTitleAndTitle from "@/components/shared/sectionsTitle/SectionSubTitleAndTitle";
import ExploreBtn from "@/components/shared/ExploreBtn";

const PopularCollection = () => {
  return (
    <div className={popularStyles.collection_container}>
      <SectionSubTitleAndTitle
        title={"Popular Collection"}
        subTitle={"COLLECTION"}
      />
      <div className={popularStyles.collection_card_group}>
        <div
          className={`${popularStyles.collection_card} ${popularStyles.left_one_s}`}
        >
          <img
            className={popularStyles.collection_card_image}
            src="images/commonCard1/card-7.jpg"
            alt=""
          />
          <div className={popularStyles.collection_card_sub_image_group}>
            <img
              src="images/commonCard2/card-1.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-2.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-3.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-4.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
          </div>
          <h1 className={popularStyles.collection_card_title}>
            Creative Art Collection
          </h1>
          <div className={popularStyles.created_by}>
            <small>Created by: </small>
            <span> @Chris_Jacobs</span>
          </div>
          <div className={popularStyles.collection_card_progress}>
            <div className={popularStyles.collection_card_single_progress}>
              <img
                className={popularStyles.progress}
                src="images/vectors&icon/progress.png"
                alt=""
              />
              <small>NFTs: 204</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i className={popularStyles.man}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <small>Creator: 14</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
              <small>Likes: 9.5k</small>
            </div>
          </div>
          <div className={popularStyles.profile}>
            <img
              className={popularStyles.collection_profile_image}
              src="images/profile/profile-1.jpg"
              alt=""
            />
            <img
              className={popularStyles.correct}
              src="images/vectors&icon/correct2.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${popularStyles.collection_card} ${popularStyles.two_hide_480_359_under_358} ${popularStyles.left_half_s}`}
        >
          <img
            className={popularStyles.collection_card_image}
            src="images/commonCard1/card-1.jpg"
            alt=""
          />
          <div className={popularStyles.collection_card_sub_image_group}>
            <img
              src="images/commonCard2/card-1.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-2.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-3.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-4.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
          </div>
          <h1 className={popularStyles.collection_card_title}>
            Creative Art Collection
          </h1>
          <div className={popularStyles.created_by}>
            <small>Created by: </small>
            <span> @Chris_Jacobs</span>
          </div>
          <div className={popularStyles.collection_card_progress}>
            <div className={popularStyles.collection_card_single_progress}>
              <img
                className={popularStyles.progress}
                src="images/vectors&icon/progress.png"
                alt=""
              />
              <small>NFTs: 204</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i className={popularStyles.man}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <small>Creator: 14</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
              <small>Likes: 9.5k</small>
            </div>
          </div>
          <div className={popularStyles.profile}>
            <img
              className={popularStyles.collection_profile_image}
              src="images/profile/profile-3.jpg"
              alt=""
            />
            <img
              className={popularStyles.correct}
              src="images/vectors&icon/correct2.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${popularStyles.collection_card} ${popularStyles.one_hide_1024_769} ${popularStyles.right_one_s}`}
        >
          <img
            className={popularStyles.collection_card_image}
            src="images/commonCard1/card-3.jpg"
            alt=""
          />
          <div className={popularStyles.collection_card_sub_image_group}>
            <img
              src="images/commonCard2/card-1.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-2.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-3.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
            <img
              src="images/commonCard2/card-4.jpg"
              alt=""
              className={popularStyles.sub_image}
            />
          </div>
          <h1 className={popularStyles.collection_card_title}>
            Creative Art Collection
          </h1>
          <div className={popularStyles.created_by}>
            <small>Created by: </small>
            <span> @Chris_Jacobs</span>
          </div>
          <div className={popularStyles.collection_card_progress}>
            <div className={popularStyles.collection_card_single_progress}>
              <img
                className={popularStyles.progress}
                src="images/vectors&icon/progress.png"
                alt=""
              />
              <small>NFTs: 204</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i className={popularStyles.man}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <small>Creator: 14</small>
            </div>
            <div className={popularStyles.collection_card_single_progress}>
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>
              <small>Likes: 9.5k</small>
            </div>
          </div>
          <div className={popularStyles.profile}>
            <img
              className={popularStyles.collection_profile_image}
              src="images/profile/profile-4.jpg"
              alt=""
            />
            <img
              className={popularStyles.correct}
              src="images/vectors&icon/correct2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <ExploreBtn />
    </div>
  );
};

export default PopularCollection;
