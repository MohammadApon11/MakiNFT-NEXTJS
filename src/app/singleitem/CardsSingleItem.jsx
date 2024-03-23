import ExploreBtn from "@/components/shared/ExploreBtn";
import React from "react";
import SingleItemCardsStyles from "../../styles/singleItem/cardsSingleItem.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faStar,
  faShareNodes,
  faHeart,
  faHammer,
  faCartShopping,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
library.add(faClock);

const CardsSingleItem = () => {
  return (
    <section className={SingleItemCardsStyles.single_item_card_container}>
      <div className={SingleItemCardsStyles.single_item_header}>
        <h1 className={SingleItemCardsStyles.live_auctions_title}>Live Auctions</h1>
        <Link href={"/live-auctions"} className={SingleItemCardsStyles.single_item_explore_btn}>
          Explore More <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className={SingleItemCardsStyles.single_item_card_group}>
        <Link href="singleitem"  className={SingleItemCardsStyles.single_item_card_area}>
          <div className={SingleItemCardsStyles.card_content}>
            <div className={SingleItemCardsStyles.card_image_container}>
              <div className={SingleItemCardsStyles.single_item_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={SingleItemCardsStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  02<small className={SingleItemCardsStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={SingleItemCardsStyles.bid_text}>
              <i className={SingleItemCardsStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div
              className={SingleItemCardsStyles.single_item_card_title_container}
            >
              <p className={SingleItemCardsStyles.single_item_card_title}>
                Morganitho
              </p>
              <div
                className={SingleItemCardsStyles.single_item_card_title_icon}
              >
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={SingleItemCardsStyles.profile_progress}>
              <div className={SingleItemCardsStyles.left_profile}>
                <div className={SingleItemCardsStyles.profile_image_group}>
                  <div className={SingleItemCardsStyles.profile_image_div}>
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_image_div} ${SingleItemCardsStyles.profile_image_div_1}`}
                  >
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_plus_div} ${SingleItemCardsStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${SingleItemCardsStyles.profile_image_opacity} ${SingleItemCardsStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={SingleItemCardsStyles.bids}>12+Bids</small>
              </div>
              <div className={SingleItemCardsStyles.right_profile}>
                <div className={SingleItemCardsStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={SingleItemCardsStyles.new_bid}>
                  New Bid:
                </small>
                <small className={SingleItemCardsStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={SingleItemCardsStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem"  className={SingleItemCardsStyles.single_item_card_area}>
          <div className={SingleItemCardsStyles.card_content}>
            <div className={SingleItemCardsStyles.card_image_container}>
              <div className={SingleItemCardsStyles.single_item_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={SingleItemCardsStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  02<small className={SingleItemCardsStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={SingleItemCardsStyles.bid_text}>
              <i className={SingleItemCardsStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div
              className={SingleItemCardsStyles.single_item_card_title_container}
            >
              <p className={SingleItemCardsStyles.single_item_card_title}>
                Morganitho
              </p>
              <div
                className={SingleItemCardsStyles.single_item_card_title_icon}
              >
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={SingleItemCardsStyles.profile_progress}>
              <div className={SingleItemCardsStyles.left_profile}>
                <div className={SingleItemCardsStyles.profile_image_group}>
                  <div className={SingleItemCardsStyles.profile_image_div}>
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_image_div} ${SingleItemCardsStyles.profile_image_div_1}`}
                  >
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_plus_div} ${SingleItemCardsStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${SingleItemCardsStyles.profile_image_opacity} ${SingleItemCardsStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={SingleItemCardsStyles.bids}>12+Bids</small>
              </div>
              <div className={SingleItemCardsStyles.right_profile}>
                <div className={SingleItemCardsStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={SingleItemCardsStyles.new_bid}>
                  New Bid:
                </small>
                <small className={SingleItemCardsStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={SingleItemCardsStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem"  className={SingleItemCardsStyles.single_item_card_area}>
          <div className={SingleItemCardsStyles.card_content}>
            <div className={SingleItemCardsStyles.card_image_container}>
              <div className={SingleItemCardsStyles.single_item_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={SingleItemCardsStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  02<small className={SingleItemCardsStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={SingleItemCardsStyles.bid_text}>
              <i className={SingleItemCardsStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div
              className={SingleItemCardsStyles.single_item_card_title_container}
            >
              <p className={SingleItemCardsStyles.single_item_card_title}>
                Morganitho
              </p>
              <div
                className={SingleItemCardsStyles.single_item_card_title_icon}
              >
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={SingleItemCardsStyles.profile_progress}>
              <div className={SingleItemCardsStyles.left_profile}>
                <div className={SingleItemCardsStyles.profile_image_group}>
                  <div className={SingleItemCardsStyles.profile_image_div}>
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_image_div} ${SingleItemCardsStyles.profile_image_div_1}`}
                  >
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_plus_div} ${SingleItemCardsStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${SingleItemCardsStyles.profile_image_opacity} ${SingleItemCardsStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={SingleItemCardsStyles.bids}>12+Bids</small>
              </div>
              <div className={SingleItemCardsStyles.right_profile}>
                <div className={SingleItemCardsStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={SingleItemCardsStyles.new_bid}>
                  New Bid:
                </small>
                <small className={SingleItemCardsStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={SingleItemCardsStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem"  className={SingleItemCardsStyles.single_item_card_area}>
          <div className={SingleItemCardsStyles.card_content}>
            <div className={SingleItemCardsStyles.card_image_container}>
              <div className={SingleItemCardsStyles.single_item_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={SingleItemCardsStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={SingleItemCardsStyles.vl}></div>
                <span>
                  02<small className={SingleItemCardsStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={SingleItemCardsStyles.bid_text}>
              <i className={SingleItemCardsStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>{" "}
              Available in stock 4
            </p>
            <div
              className={SingleItemCardsStyles.single_item_card_title_container}
            >
              <p className={SingleItemCardsStyles.single_item_card_title}>
                Morganitho
              </p>
              <div
                className={SingleItemCardsStyles.single_item_card_title_icon}
              >
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div
                  className={
                    SingleItemCardsStyles.single_item_card_title_icon_container
                  }
                >
                  <i className={SingleItemCardsStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={SingleItemCardsStyles.profile_progress}>
              <div className={SingleItemCardsStyles.left_profile}>
                <div className={SingleItemCardsStyles.profile_image_group}>
                  <div className={SingleItemCardsStyles.profile_image_div}>
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_image_div} ${SingleItemCardsStyles.profile_image_div_1}`}
                  >
                    <img
                      className={SingleItemCardsStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${SingleItemCardsStyles.profile_plus_div} ${SingleItemCardsStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${SingleItemCardsStyles.profile_image_opacity} ${SingleItemCardsStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={SingleItemCardsStyles.bids}>12+Bids</small>
              </div>
              <div className={SingleItemCardsStyles.right_profile}>
                <div className={SingleItemCardsStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={SingleItemCardsStyles.new_bid}>Price:</small>
                <small className={SingleItemCardsStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={SingleItemCardsStyles.card_btn}>
              <FontAwesomeIcon icon={faCartShopping} />
              Buy Now
            </button>
          </div>
        </Link>
      </div>
      <ExploreBtn />
    </section>
  );
};

export default CardsSingleItem;
