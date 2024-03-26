"use client";
import React, { useState } from "react";
import CollectionCardsStyles from "../../styles/collection/collectionPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LoadMoreBtn from "@/components/shared/LoadMoreBtn";
import { TransitionWrapper2 } from "@/components/framer-motion/TransitionWrapper";

const CollectionCards = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <div className={CollectionCardsStyles.collection_container}>
      <div className={CollectionCardsStyles.collection_card_group}>
        <TransitionWrapper2 index={1}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${CollectionCardsStyles.left_one_s}`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-7.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={2}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${CollectionCardsStyles.two_hide_480_359_under_358} ${CollectionCardsStyles.left_half_s}`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-1.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={3}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${CollectionCardsStyles.one_hide_1024_769} ${CollectionCardsStyles.right_one_s}`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-3.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={4}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.left_one_s
            } ${!loadMore ? "block" : "hidden"}`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-7.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={5}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.two_hide_480_359_under_358
            } ${CollectionCardsStyles.left_half_s} ${
              !loadMore ? "block" : "hidden"
            }`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-1.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={6}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.one_hide_1024_769
            } ${CollectionCardsStyles.right_one_s} ${
              !loadMore ? "block" : "hidden"
            }`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-3.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        {/* hide cards */}
        <TransitionWrapper2 index={7}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.left_one_s
            } ${loadMore ? "block" : "hidden"}`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-2.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-4.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={8}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.two_hide_480_359_under_358
            } ${CollectionCardsStyles.left_half_s} ${
              loadMore ? "block" : "hidden"
            }`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-3.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
        <TransitionWrapper2 index={9}>
          <div
            className={`${CollectionCardsStyles.collection_card} ${
              CollectionCardsStyles.one_hide_1024_769
            } ${CollectionCardsStyles.right_one_s} ${
              loadMore ? "block" : "hidden"
            }`}
          >
            <img
              className={CollectionCardsStyles.collection_card_image}
              src="images/commonCard1/card-4.jpg"
              alt=""
            />
            <div
              className={CollectionCardsStyles.collection_card_sub_image_group}
            >
              <img
                src="images/commonCard2/card-2.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-1.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-4.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
              <img
                src="images/commonCard2/card-3.jpg"
                alt=""
                className={CollectionCardsStyles.sub_image}
              />
            </div>
            <h1 className={CollectionCardsStyles.collection_card_title}>
              Creative Art Collection
            </h1>
            <div className={CollectionCardsStyles.created_by}>
              <small>Created by: </small>
              <span> @Chris_Jacobs</span>
            </div>
            <div className={CollectionCardsStyles.collection_card_progress}>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <img
                  className={CollectionCardsStyles.progress}
                  src="images/vectors&icon/progress.png"
                  alt=""
                />
                <small>NFTs: 204</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i className={CollectionCardsStyles.man}>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <small>Creator: 14</small>
              </div>
              <div
                className={
                  CollectionCardsStyles.collection_card_single_progress
                }
              >
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <small>Likes: 9.5k</small>
              </div>
            </div>
            <div className={CollectionCardsStyles.profile}>
              <img
                className={CollectionCardsStyles.collection_profile_image}
                src="images/profile/profile-3.jpg"
                alt=""
              />
              <img
                className={CollectionCardsStyles.correct}
                src="images/vectors&icon/correct2.png"
                alt=""
              />
            </div>
          </div>
        </TransitionWrapper2>
      </div>
      <LoadMoreBtn loadMore={loadMore} setLoadMore={setLoadMore} />
    </div>
  );
};

export default CollectionCards;
