"use client";
import React, { useState } from "react";
import home2navStyles from "../../../styles/home-2/nav.module.css";
import {
  BsChevronDown,
  BsChevronRight,
  BsBell,
  BsSearch,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Home2Nav = () => {
  const [isClick, setIsClick] = useState(false);
  const [isHomeClick, setHomeClick] = useState(false);
  const [isSubPageClick, setSubPageClick] = useState(false);
  const [subHomeNavShown, setHomeSubNavShown] = useState(false);
  const [subPageNavShown, setPageSubNavShown] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleSubHome = () => {
    setHomeClick(!isHomeClick);
  };
  const handleSubPage = () => {
    setSubPageClick(!isSubPageClick);
  };
  const pathName = usePathname();
  return (
    <>
      <nav className={home2navStyles.nav_row}>
        <Link href="/" className={home2navStyles.nav_title_row}>
          Makinft
        </Link>
        <ul className={home2navStyles.nav_link_row}>
          <li
            onMouseEnter={() => setHomeSubNavShown(true)}
            onMouseLeave={() => setHomeSubNavShown(false)}
            className={`${home2navStyles.page_list}`}
          >
            <span className={home2navStyles.desktop_home_icon}>Home</span>
            <div className={home2navStyles.rotate_arrow_180}>
              <BsChevronDown />
            </div>
            {subHomeNavShown && (
              <ul className={home2navStyles.pages_group}>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/"
                  onClick={() => setHomeSubNavShown(false)}
                >
                  <li>Home 1</li>
                </Link>
                <Link
                  className={`${pathName === "/home-2" && "font-bold"} ${
                    home2navStyles.page
                  }`}
                  href="/home-2"
                  onClick={() => setHomeSubNavShown(false)}
                >
                  <li>Home 2</li>
                </Link>
                <Link
                  style={{ border: "none" }}
                  className={`${home2navStyles.page}`}
                  href="/home-3"
                  onClick={() => setHomeSubNavShown(false)}
                >
                  <li>Home 3</li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <Link
              className={`${pathName === "/explore" && "font-bold"} ${
                home2navStyles.text_dec_none_color_white
              }`}
              href="/explore"
            >
              Explore
            </Link>
          </li>
          <li
            onMouseEnter={() => setPageSubNavShown(true)}
            onMouseLeave={() => setPageSubNavShown(false)}
            className={home2navStyles.page_list}
          >
            Pages
            <div className={home2navStyles.rotate_arrow_180}>
              <BsChevronDown />
            </div>
            {subPageNavShown && (
              <ul className={home2navStyles.pages_group}>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/explore-v2"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Explore V2</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/live-auctions"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Live Auctions</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/collection"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Collection</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/creators"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Creators</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/activity-1"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Activity V1</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/activity-2"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Activity V2</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/singleitem"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Single Item</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/wallet"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Wallet</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/create-item"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Create Item</li>
                </Link>
                <Link
                  className={`${home2navStyles.page}`}
                  href="/signup"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Signup</li>
                </Link>
                <Link
                  style={{ border: "none" }}
                  className={`${home2navStyles.page}`}
                  href="/login"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Login</li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <Link
              className={home2navStyles.text_dec_none_color_white}
              href="/activity-1"
            >
              Activity
            </Link>
          </li>
          <li>
            <Link href="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
        <div className={home2navStyles.nav_features}>
          <div className={home2navStyles.nav_search_container}>
            <input
              className={home2navStyles.search_field}
              type="text"
              name=""
              id=""
              placeholder="Search Here"
            />
            <i>
              <BsSearch />
            </i>
          </div>
          <div className={home2navStyles.bell_div}>
            <div className={home2navStyles.bell_number}>
              <small>6</small>
            </div>
            <i>
              <BsBell />
            </i>
          </div>
          <img
            className={home2navStyles.nav_profile_image}
            src="images/profile/profile-1.jpg"
            alt=""
          />
          <Link
            className={home2navStyles.text_dec_none_color_white}
            href="/create-item"
          >
            <button className={home2navStyles.create_btn}>Create</button>
          </Link>
        </div>
      </nav>
      {/* <!-- mobile-navbar --> */}
      <nav className={home2navStyles.mobile_nav_row}>
        <Link href="/" className={home2navStyles.header_logo}>
          Makinft
        </Link>
        <div className={home2navStyles.nav_right}>
          <div className={home2navStyles.menu_and_icon}>
            <div className={home2navStyles.mobile_nav_features}>
              <div className={home2navStyles.mobile_nav_search_container}>
                <input
                  className={home2navStyles.mobile_search_field}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Here"
                />
                <i>
                  <BsSearch />
                </i>
              </div>
              <div className={home2navStyles.mobile_bell_div}>
                <div className={home2navStyles.mobile_bell_number}>
                  <small>6</small>
                </div>
                <i>
                  <BsBell />
                </i>
              </div>
              <img
                className={home2navStyles.mobile_nav_profile_image}
                src="images/profile/profile-1.jpg"
                alt=""
              />
              <Link
                className={home2navStyles.text_dec_none_color_white}
                href="/create-item"
              >
                <button className={home2navStyles.mobile_create_btn}>
                  Create
                </button>
              </Link>
            </div>
            <i onClick={handleClick} className={home2navStyles.bars_color}>
              {isClick ? (
                <div
                  className={`${isClick && home2navStyles.transition_all} ${
                    isClick && home2navStyles.flip
                  }`}
                >
                  <GiTireIronCross />
                </div>
              ) : (
                <div
                  className={`${isClick && home2navStyles.transition_all} ${
                    isClick && home2navStyles.flip_minus
                  }`}
                >
                  <FaBars />
                </div>
              )}
            </i>
          </div>
          <div
            className={`${home2navStyles.nav} ${
              isClick && home2navStyles.show
            }`}
          >
            <ul className={home2navStyles.nav_list}>
              <li className={home2navStyles.nav_title}>
                <Link className={home2navStyles.nav_logo} href="/home-2">
                  Makinft
                </Link>
              </li>
              <div className={home2navStyles.hr_full}></div>
              <li
                className={`${home2navStyles.nav_item} ${home2navStyles.active_menu}`}
                id={home2navStyles.sub_menu_home}
              >
                <div
                  className={home2navStyles.sub_menu}
                  onClick={handleSubHome}
                >
                  <span className={home2navStyles.nav_link}>Home</span>
                  <div className={home2navStyles.sub_menu_icon_div}>
                    <div className={home2navStyles.sub_menu_icon}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    isHomeClick ? home2navStyles.hr : home2navStyles.none_class
                  } ${home2navStyles.hr_margin_top}`}
                ></div>
                <div
                  className={`${
                    isHomeClick
                      ? home2navStyles.sub_menu_open
                      : home2navStyles.mobile_pages_group_display_none
                  }`}
                  id={home2navStyles.mobile_sub_nav_display_none_home}
                >
                  <ul className={home2navStyles.mobile_pages_group}>
                    <Link
                      className={`${home2navStyles.mobile_page} ${home2navStyles.mobile_page_top}`}
                      href="/"
                    >
                      <li>Home 1</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={`${home2navStyles.mobile_page} ${home2navStyles.mobile_page_top}`}
                      href="/home-2"
                    >
                      <li className={home2navStyles.font_weight}>Home 2</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={`${home2navStyles.mobile_page} ${home2navStyles.mobile_page_bottom}`}
                      href="/home-2"
                    >
                      <li>Home 3</li>
                    </Link>
                    {/* <!-- <div className="hr-minus"></div> --> */}
                  </ul>
                </div>
              </li>
              <div className={home2navStyles.hr}></div>
              <li className={home2navStyles.nav_item}>
                <Link className={home2navStyles.nav_link} href="/explore">
                  Explore
                </Link>
              </li>
              <div className={home2navStyles.hr}></div>
              <li className={home2navStyles.nav_item}>
                <Link className={home2navStyles.nav_link} href="/activity-1">
                  Activity
                </Link>
              </li>
              <div className={home2navStyles.hr}></div>
              <li
                className={home2navStyles.nav_item}
                id={home2navStyles.sub_menu}
              >
                <div
                  className={home2navStyles.sub_menu}
                  onClick={handleSubPage}
                >
                  <span className={home2navStyles.nav_link}>Pages</span>
                  <div className={home2navStyles.sub_menu_icon_div}>
                    <div className={home2navStyles.sub_menu_icon}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
                <div
                  className={`${isSubPageClick ? home2navStyles.hr : ""}`}
                ></div>
                <div
                  className={
                    isSubPageClick
                      ? home2navStyles.sub_nav_open
                      : home2navStyles.mobile_pages_group_display_none
                  }
                  id={home2navStyles.mobile_sub_nav_display_none}
                >
                  <ul className={home2navStyles.mobile_pages_group}>
                    <Link
                      className={`${home2navStyles.mobile_page} ${home2navStyles.mobile_page_top}`}
                      href="/explore-v2"
                    >
                      <li>Explore V2</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/live-auctions"
                    >
                      <li>Live Auctions</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/collection"
                    >
                      <li>Collection</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/creators"
                    >
                      <li>Creators</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/activity-1"
                    >
                      <li>Activity V1</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/activity-2"
                    >
                      <li>Activity V2</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/singleitem"
                    >
                      <li>Single Item</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link className={home2navStyles.mobile_page} href="/wallet">
                      <li>Wallet</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={home2navStyles.mobile_page}
                      href="/create-item"
                    >
                      <li>Create Item</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link className={home2navStyles.mobile_page} href="/signup">
                      <li>Signup</li>
                    </Link>
                    <div className={home2navStyles.sub_hr}></div>
                    <Link
                      className={`${home2navStyles.mobile_page}`}
                      href="/login"
                    >
                      <li>Login</li>
                    </Link>
                  </ul>
                </div>
              </li>
              <div className={home2navStyles.hr}></div>
              {/* <li className={home2navStyles.nav_item}>
                <Link className={home2navStyles.nav_link} href="#">
                  Authors
                </Link>
              </li> */}
              <div className={home2navStyles.hr}></div>
              <li className={home2navStyles.nav_item}>
                <Link className={home2navStyles.nav_link} href="/contact">
                  Contact
                </Link>
              </li>
              <div className={home2navStyles.hr}></div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home2Nav;
