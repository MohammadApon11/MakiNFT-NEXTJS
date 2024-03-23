import ExploreBtn from "@/components/shared/ExploreBtn";
import React from "react";
import liveCardStyles from "../../styles/home-3/LiveAuctionsHome3.module.css";
import SectionSubTitleAndTitle from "@/components/shared/sectionsTitle/SectionSubTitleAndTitle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faStar,
  faShareNodes,
  faHeart,
  faHammer,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
library.add(faClock);

const LiveAuctionsHome3 = () => {
  return (
    <section className={liveCardStyles.live_card_container}>
      <SectionSubTitleAndTitle title="Live Auctions" subTitle="AUCTION" />
      <div className={liveCardStyles.live_card_group}>
        <Link href="singleitem" className={liveCardStyles.live_card_area}>
          <div className={liveCardStyles.card_content}>
            <div className={liveCardStyles.card_image_container}>
              <div className={liveCardStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveCardStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  02<small className={liveCardStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveCardStyles.bid_text}>
              <i className={liveCardStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveCardStyles.live_card_title_container}>
              <p className={liveCardStyles.live_card_title}>Morganitho</p>
              <div className={liveCardStyles.live_card_title_icon}>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={liveCardStyles.profile_progress}>
              <div className={liveCardStyles.left_profile}>
                <div className={liveCardStyles.profile_image_group}>
                  <div className={liveCardStyles.profile_image_div}>
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_image_div} ${liveCardStyles.profile_image_div_1}`}
                  >
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_plus_div} ${liveCardStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${liveCardStyles.profile_image_opacity} ${liveCardStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={liveCardStyles.bids}>12+Bids</small>
              </div>
              <div className={liveCardStyles.right_profile}>
                <div className={liveCardStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveCardStyles.new_bid}>New Bid:</small>
                <small className={liveCardStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveCardStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem" className={liveCardStyles.live_card_area}>
          <div className={liveCardStyles.card_content}>
            <div className={liveCardStyles.card_image_container}>
              <div className={liveCardStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveCardStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  02<small className={liveCardStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveCardStyles.bid_text}>
              <i className={liveCardStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveCardStyles.live_card_title_container}>
              <p className={liveCardStyles.live_card_title}>Morganitho</p>
              <div className={liveCardStyles.live_card_title_icon}>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={liveCardStyles.profile_progress}>
              <div className={liveCardStyles.left_profile}>
                <div className={liveCardStyles.profile_image_group}>
                  <div className={liveCardStyles.profile_image_div}>
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_image_div} ${liveCardStyles.profile_image_div_1}`}
                  >
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_plus_div} ${liveCardStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${liveCardStyles.profile_image_opacity} ${liveCardStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={liveCardStyles.bids}>12+Bids</small>
              </div>
              <div className={liveCardStyles.right_profile}>
                <div className={liveCardStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveCardStyles.new_bid}>New Bid:</small>
                <small className={liveCardStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveCardStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem" className={liveCardStyles.live_card_area}>
          <div className={liveCardStyles.card_content}>
            <div className={liveCardStyles.card_image_container}>
              <div className={liveCardStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveCardStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  02<small className={liveCardStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveCardStyles.bid_text}>
              <i className={liveCardStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveCardStyles.live_card_title_container}>
              <p className={liveCardStyles.live_card_title}>Morganitho</p>
              <div className={liveCardStyles.live_card_title_icon}>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={liveCardStyles.profile_progress}>
              <div className={liveCardStyles.left_profile}>
                <div className={liveCardStyles.profile_image_group}>
                  <div className={liveCardStyles.profile_image_div}>
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_image_div} ${liveCardStyles.profile_image_div_1}`}
                  >
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_plus_div} ${liveCardStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${liveCardStyles.profile_image_opacity} ${liveCardStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={liveCardStyles.bids}>12+Bids</small>
              </div>
              <div className={liveCardStyles.right_profile}>
                <div className={liveCardStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveCardStyles.new_bid}>New Bid:</small>
                <small className={liveCardStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveCardStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </Link>
        <Link href="singleitem" className={liveCardStyles.live_card_area}>
          <div className={liveCardStyles.card_content}>
            <div className={liveCardStyles.card_image_container}>
              <div className={liveCardStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveCardStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveCardStyles.vl}></div>
                <span>
                  02<small className={liveCardStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveCardStyles.bid_text}>
              <i className={liveCardStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>{" "}
              Available in stock 4
            </p>
            <div className={liveCardStyles.live_card_title_container}>
              <p className={liveCardStyles.live_card_title}>Morganitho</p>
              <div className={liveCardStyles.live_card_title_icon}>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveCardStyles.live_card_title_icon_container}>
                  <i className={liveCardStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </div>
              </div>
            </div>
            <div className={liveCardStyles.profile_progress}>
              <div className={liveCardStyles.left_profile}>
                <div className={liveCardStyles.profile_image_group}>
                  <div className={liveCardStyles.profile_image_div}>
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_image_div} ${liveCardStyles.profile_image_div_1}`}
                  >
                    <img
                      className={liveCardStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${liveCardStyles.profile_plus_div} ${liveCardStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${liveCardStyles.profile_image_opacity} ${liveCardStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={liveCardStyles.bids}>12+Bids</small>
              </div>
              <div className={liveCardStyles.right_profile}>
                <div className={liveCardStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveCardStyles.new_bid}>Price:</small>
                <small className={liveCardStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveCardStyles.card_btn}>
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

export default LiveAuctionsHome3;
