"use client";
import React, { useEffect, useRef, useState } from "react";
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
library.add(faClock);
import liveStyles from "../../styles/artworkv2/exploreArtworkv2.module.css";
import PaginationBtn from "@/components/shared/PaginationBtn";
import paginationBtnStyle from "../../styles/sharedStyles/paginationBtn.module.css";

const ExploreArtworkV2 = () => {
  const [btnText1, setBtnText1] = useState("all");
  const [btnText2, setBtnText2] = useState("all");
  const [btnText3, setBtnText3] = useState("all");
  const [btnText4, setBtnText4] = useState("all");

  // dropdown 1
  const [btnTextOne, setBtnTextOne] = useState("");
  const [btnTextTwo, setBtnTextTwo] = useState("");
  const [btnTextThree, setBtnTextThree] = useState("");
  const [btnTextFour, setBtnTextFour] = useState("");

  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  //
  const handleItemOne = (text) => {
    setBtnTextOne(text);
    setIsOpenOne(false);
    setBtnText1(text);
  };
  const handleItemTwo = (text) => {
    setBtnTextTwo(text);
    setIsOpenTwo(false);
    setBtnText2(text);
  };
  const handleItemThree = (text) => {
    setBtnTextThree(text);
    setIsOpenThree(false);
    setBtnText3(text);
  };
  const handleItemFour = (text) => {
    setBtnTextFour(text);
    setIsOpenFour(false);
    setBtnText4(text);
  };

  // price range work
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [price, setPrice] = useState(100);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const handleItemPrice = (text) => {
    setIsOpenFour(false);
  };

  // windows click
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpenOne(false);
      setIsOpenTwo(false);
      setIsOpenThree(false);
      setIsOpenFour(false);
      setIsOpenPrice(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   pagination work
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;
  const itemsPerPage = 4;

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startIndex = currentPage > 3 ? currentPage - 2 : 1;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalPages);

    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${paginationBtnStyle.pagination_btn} ${
            currentPage === i ? paginationBtnStyle.active : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {`0${i}`.slice(-2)}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section className={liveStyles.live_card_container}>
      <div ref={dropdownRef} className={liveStyles.card_btn_group_header}>
        <div className={liveStyles.filtering_btn_group}>
          <div className={liveStyles.custom_dropdown_1}>
            <button
              onClick={() => setIsOpenOne(!isOpenOne)}
              className={`${liveStyles.dropdown_toggle_btn_1} ${liveStyles.filter_btn}`}
            >
              <img
                src="images/vectors&icon/grid-view.png"
                alt="Dropdown Icon"
                className={liveStyles.dropdown_icon_1}
              />
              {btnTextOne === "all" ? "Category" : btnTextOne || "Category"}
            </button>
            <ul
              className={`${liveStyles.dropdown_menu_1} ${
                isOpenOne ? "block" : "hidden"
              }`}
            >
              <li onClick={() => handleItemOne("all")}>Category</li>
              <li onClick={() => handleItemOne("Creative")}>Creative</li>
              <li onClick={() => handleItemOne("White Lady")}>White Lady</li>
              <li onClick={() => handleItemOne("Colorful Dog")}>
                Colorful Dog
              </li>
              <li onClick={() => handleItemOne("Earth of Arts")}>
                Earth of Arts
              </li>
            </ul>
          </div>
          <div className={liveStyles.custom_dropdown_2}>
            <button
              onClick={() => setIsOpenPrice(!isOpenPrice)}
              className={`${liveStyles.dropdown_toggle_btn_2} ${liveStyles.filter_btn}`}
            >
              <img
                src="images/vectors&icon/grid-view.png"
                alt="Dropdown Icon"
                className={liveStyles.dropdown_icon_2}
              />
              Price Range
            </button>
            <div
              className={`${liveStyles.dropdown_menu_2} ${
                isOpenPrice ? "block" : "hidden"
              }`}
            >
              <input
                className={liveStyles.price_range_input}
                type="range"
                min={40}
                max={1000}
                value={price}
                onInput={handleInput}
              />
              <h1 className={liveStyles.price_text}>Price: {price}</h1>
            </div>
          </div>
          <div className={liveStyles.custom_dropdown_3}>
            <button
              onClick={() => setIsOpenTwo(!isOpenTwo)}
              className={`${liveStyles.dropdown_toggle_btn_3} ${liveStyles.filter_btn}`}
            >
              <img src="images/vectors&icon/sale.png" alt="Dropdown Icon" />
              {btnTextTwo === "all" ? "Sale Type" : btnTextTwo || "Sale Type"}
            </button>
            <ul
              className={`${liveStyles.dropdown_menu_3} ${
                isOpenTwo ? "block" : "hidden"
              }`}
            >
              <li onClick={() => handleItemTwo("all")}>Sale Type</li>
              <li onClick={() => handleItemTwo("Transactional")}>
                Transactional
              </li>
              <li onClick={() => handleItemTwo("Solution")}>Solution</li>
              <li onClick={() => handleItemTwo("Consultative")}>
                Consultative
              </li>
              <li onClick={() => handleItemTwo("Provocative")}>Provocative</li>
            </ul>
          </div>
          <div className={liveStyles.custom_dropdown_4}>
            <button
              onClick={() => setIsOpenThree(!isOpenThree)}
              className={`${liveStyles.dropdown_toggle_btn_1} ${liveStyles.filter_btn}`}
            >
              <img
                src="images/vectors&icon/blockchain.png"
                alt="Dropdown Icon"
              />
              {btnTextThree === "all"
                ? "Blockchain"
                : btnTextThree || "Blockchain"}
            </button>
            <ul
              className={`${liveStyles.dropdown_menu_4} ${
                isOpenThree ? "block" : "hidden"
              }`}
            >
              <li onClick={() => handleItemThree("all")}>Blockchain</li>
              <li onClick={() => handleItemThree("Cardano")}>Cardano</li>
              <li onClick={() => handleItemThree("Ethereum")}>Ethereum</li>
              <li onClick={() => handleItemThree("Bitcoin")}>Bitcoin</li>
              <li onClick={() => handleItemThree("Ripple")}>Ripple</li>
            </ul>
          </div>
        </div>
        <div className={liveStyles.custom_dropdown_5}>
          <button
            onClick={() => setIsOpenFour(!isOpenFour)}
            className={liveStyles.dropdown_toggle_btn_5}
          >
            <img src="images/vectors&icon/sort.png" alt="Dropdown five" />
            <span className={liveStyles.sort_by}>Sort By:</span>
            {btnTextFour === "all"
              ? "Recently Added"
              : btnTextFour || "Recently Added"}
          </button>
          <ul
            className={`${liveStyles.dropdown_menu_5} ${
              isOpenFour ? "block" : "hidden"
            }`}
          >
            <li onClick={() => handleItemFour("all")}>Recently Added</li>
            <li onClick={() => handleItemFour("Today")}>Today</li>
            <li onClick={() => handleItemFour("Yesterday")}>Yesterday</li>
            <li onClick={() => handleItemFour("Last-Week")}>Last-Week</li>
            <li onClick={() => handleItemFour("Last-Month")}>Last-Month</li>
          </ul>
        </div>
      </div>
      <div className={liveStyles.live_card_group}>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText1 === "all"
              ? "block"
              : btnText1 === "Creative"
              ? "hidden"
              : btnText1 === "White Lady"
              ? "block"
              : btnText1 === "Colorful Dog"
              ? "hidden"
              : btnText1 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 100 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Sale Type"
              ? "hidden"
              : btnText2 === "Transactional"
              ? "block"
              : btnText2 === "Solution"
              ? "hidden"
              : btnText2 === "Consultative"
              ? "block"
              : "hidden"
          } ${price <= 200 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Blockchain"
              ? "hidden"
              : btnText3 === "Cardano"
              ? "block"
              : btnText3 === "Ethereum"
              ? "hidden"
              : btnText3 === "Bitcoin"
              ? "block"
              : "hidden"
          } ${price <= 300 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 400 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>{" "}
              Available in stock 4
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
                  </div>
                </div>
                <small className={liveStyles.bids}>12+Bids</small>
              </div>
              <div className={liveStyles.right_profile}>
                <div className={liveStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveStyles.new_bid}>Price:</small>
                <small className={liveStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faCartShopping} />
              Buy Now
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText1 === "all"
              ? "block"
              : btnText1 === "Recently Added"
              ? "hidden"
              : btnText1 === "Today"
              ? "block"
              : btnText1 === "Yesterday"
              ? "hidden"
              : btnText1 === "Last-Week"
              ? "block"
              : "hidden"
          } ${price <= 500 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>{" "}
              Available in stock 4
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
                  </div>
                </div>
                <small className={liveStyles.bids}>12+Bids</small>
              </div>
              <div className={liveStyles.right_profile}>
                <div className={liveStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveStyles.new_bid}>Price:</small>
                <small className={liveStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faCartShopping} />
              Buy Now
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${liveStyles.live_card_area} ${
            btnText1 === "all"
              ? "block"
              : btnText1 === "Recently Added"
              ? "hidden"
              : btnText1 === "Today"
              ? "block"
              : btnText1 === "Yesterday"
              ? "hidden"
              : btnText1 === "Last-Week"
              ? "block"
              : "hidden"
          } ${price <= 500 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>{" "}
              Available in stock 4
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
                  </div>
                </div>
                <small className={liveStyles.bids}>12+Bids</small>
              </div>
              <div className={liveStyles.right_profile}>
                <div className={liveStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={liveStyles.new_bid}>Price:</small>
                <small className={liveStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faCartShopping} />
              Buy Now
            </button>
          </div>
        </div>
        {/* 1 */}
        <div
          className={`${currentPage === 1 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 1 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 1 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 2 */}
        <div
          className={`${currentPage === 2 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 2 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 2 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 3 */}
        <div
          className={`${currentPage === 3 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 3 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 3 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 4 */}
        <div
          className={`${currentPage === 4 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 4 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 4 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 5 */}
        <div
          className={`${currentPage === 5 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 5 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 5 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 6 */}
        <div
          className={`${currentPage === 6 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-4.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 6 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 6 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        {/* 7 */}
        <div
          className={`${currentPage === 7 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText2 === "all"
              ? "block"
              : btnText2 === "Creative"
              ? "hidden"
              : btnText2 === "White Lady"
              ? "block"
              : btnText2 === "Colorful Dog"
              ? "hidden"
              : btnText2 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 600 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-3.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 7 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText3 === "all"
              ? "block"
              : btnText3 === "Creative"
              ? "hidden"
              : btnText3 === "White Lady"
              ? "block"
              : btnText3 === "Colorful Dog"
              ? "hidden"
              : btnText3 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 800 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <i>
                  <FontAwesomeIcon icon={faClock} />
                </i>
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
        <div
          className={`${currentPage === 7 ? "block" : "hidden"} ${
            liveStyles.live_card_area
          } ${
            btnText4 === "all"
              ? "block"
              : btnText4 === "Creative"
              ? "hidden"
              : btnText4 === "White Lady"
              ? "block"
              : btnText4 === "Colorful Dog"
              ? "hidden"
              : btnText4 === "Earth of Arts"
              ? "block"
              : "hidden"
          } ${price <= 1000 ? "block" : "hidden"}`}
        >
          <div className={liveStyles.card_content}>
            <div className={liveStyles.card_image_container}>
              <div className={liveStyles.live_card_image}>
                <img src="images/commonCard2/card-1.jpg" alt="" />
              </div>
              <div className={liveStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={liveStyles.vl}></div>
                <span>
                  02<small className={liveStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={liveStyles.bid_text}>
              <i className={liveStyles.up_arrow}>
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
              Highest bid 0.24ETH
            </p>
            <div className={liveStyles.live_card_title_container}>
              <p className={liveStyles.live_card_title}>Morganitho</p>
              <div className={liveStyles.live_card_title_icon}>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.star}>
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.share}>
                    <FontAwesomeIcon icon={faShareNodes} />
                  </i>
                </div>
                <div className={liveStyles.live_card_title_icon_container}>
                  <i className={liveStyles.love}>
                    <FontAwesomeIcon icon={faHeart} />
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
                    <small>+</small>
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
            <button className={liveStyles.card_btn}>
              <FontAwesomeIcon icon={faHammer} />
              Place Bid
            </button>
          </div>
        </div>
      </div>
      <PaginationBtn
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        renderPageNumbers={renderPageNumbers}
      />
    </section>
  );
};

export default ExploreArtworkV2;
