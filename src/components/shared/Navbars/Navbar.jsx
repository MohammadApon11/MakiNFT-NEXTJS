"use client";
import React, { useEffect, useState } from "react";
import navStyle from "../../../styles/sharedStyles/nav.module.css";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { PiWalletLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
      {/* desktop-navbar */}
      <nav className={navStyle.nav_row}>
        <Link href="/" className={navStyle.nav_title_row}>
          Makinft
        </Link>
        <ul className={navStyle.nav_link_row}>
          <li
            className={`${navStyle.page_list}`}
            onMouseEnter={() => setHomeSubNavShown(true)}
            onMouseLeave={() => setHomeSubNavShown(false)}
          >
            Home
            <div className={navStyle.rotate_arrow_180}>
              <BsChevronDown />
            </div>
            {subHomeNavShown && (
              <ul className={navStyle.pages_group}>
                <Link
                  className={`${pathName === "/" && "font-bold"} ${navStyle.page}`}
                  href="/"
                  onClick={() => setHomeSubNavShown(false)}
                >
                  <li>Home 1</li>
                </Link>
                <Link
                  className={`${navStyle.page}`}
                  href="/home-2"
                  onClick={() => setHomeSubNavShown(false)}
                >
                  <li>Home 2</li>
                </Link>
                <Link
                  style={{ border: "none" }}
                  className={`${pathName === "/home-3" && "font-bold"} ${`${
                    pathName === "/home-3" && "font-bold"
                  } ${navStyle.page}`}`}
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
              className={`${pathName === "/explore" && "font-bold"}`}
              href="/explore"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/activity-1" && "font-bold"}`}
              href="/activity-1"
            >
              Activity
            </Link>
          </li>
          <li
            className={navStyle.page_list}
            onMouseEnter={() => setPageSubNavShown(true)}
            onMouseLeave={() => setPageSubNavShown(false)}
          >
            Pages
            <div className={navStyle.rotate_arrow_180}>
              <BsChevronDown />
            </div>
            {subPageNavShown && (
              <ul className={navStyle.pages_group}>
                <Link
                  className={`${pathName === "/explore-v2" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/explore-v2"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Explore V2</li>
                </Link>
                <Link
                  className={`${pathName === "/live-auctions" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/live-auctions"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Live Auctions</li>
                </Link>
                <Link
                  className={`${pathName === "/collection" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/collection"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Collection</li>
                </Link>
                <Link
                  className={`${pathName === "/creators" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/creators"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Creators</li>
                </Link>
                <Link
                  className={`${pathName === "/activity-1" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/activity-1"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Activity V1</li>
                </Link>
                <Link
                  className={`${pathName === "/activity-2" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/activity-2"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Activity V2</li>
                </Link>
                <Link
                  className={`${pathName === "/singleitem" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/singleitem"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Single Item</li>
                </Link>
                <Link
                  className={`${pathName === "/wallet" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/wallet"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Wallet</li>
                </Link>
                <Link
                  className={`${pathName === "/create-item" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/create-item"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Create Item</li>
                </Link>
                <Link
                  className={`${pathName === "/signup" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/signup"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Signup</li>
                </Link>
                <Link
                  style={{ border: "none" }}
                  className={`${pathName === "/login" && "font-bold"} ${
                    navStyle.page
                  }`}
                  href="/login"
                  onClick={() => setPageSubNavShown(false)}
                >
                  <li>Login</li>
                </Link>
              </ul>
            )}
          </li>
          {/* <li>
            <Link href="#">Authors</Link>
          </li> */}
          <li>
            <Link
              className={`${pathName === "/contact" && "font-bold"}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <Link href="/wallet">
            <button className={navStyle.primary_btn_row}>
              <div className={navStyle.icon_wallet}>
                <PiWalletLight />
              </div>
              Connect Wallet
            </button>
          </Link>
        </ul>
      </nav>
      {/* mobile-navbar  */}
      <nav className={navStyle.mobile_nav_row}>
        <Link href="/" className={navStyle.header_logo}>
          Makinft
        </Link>
        <div className={navStyle.nav_right}>
          <div className={navStyle.menu_and_icon}>
            <button className={navStyle.nav_btn}>
              <i>
                <PiWalletLight />
              </i>
              Connect Wallet
            </button>
            <div className={navStyle.mobile_nav_icon} onClick={handleClick}>
              {isClick ? (
                <div
                  className={`${isClick && navStyle.transition_all} ${
                    isClick && navStyle.flip
                  }`}
                >
                  <GiTireIronCross />
                </div>
              ) : (
                <div
                  className={`${isClick && navStyle.transition_all} ${
                    isClick && navStyle.flip_minus
                  }`}
                >
                  <FaBars />
                </div>
              )}
            </div>
          </div>
          <div className={`${navStyle.nav} ${isClick && navStyle.show}`}>
            <ul className={navStyle.nav_list}>
              <li
                className={navStyle.nav_title}
                onClick={() => setIsClick(false)}
              >
                <Link className={navStyle.nav_logo} href="/">
                  Makinft
                </Link>
              </li>
              <div className={navStyle.hr_full}></div>
              <li
                className={`${navStyle.nav_item}`}
                id={navStyle.sub_menu_home}
              >
                <div className={navStyle.sub_menu} onClick={handleSubHome}>
                  <span className={navStyle.nav_link}>Home</span>
                  <div className={navStyle.sub_menu_icon_div}>
                    <div className={navStyle.sub_menu_icon}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    isHomeClick ? navStyle.hr : navStyle.none_class
                  } ${navStyle.hr_margin_top}`}
                ></div>
                <div
                  className={`${
                    isHomeClick
                      ? navStyle.sub_menu_open
                      : navStyle.mobile_pages_group_display_none
                  }`}
                  id={navStyle.mobile_sub_nav_display_none_home}
                >
                  <ul className={navStyle.mobile_pages_group}>
                    <Link
                      className={`${navStyle.mobile_page} ${navStyle.mobile_page_top}`}
                      href="/"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Home 1</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={`${navStyle.mobile_page} ${navStyle.mobile_page_top}`}
                      href="/home-2"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Home 2</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={`${navStyle.mobile_page} ${navStyle.mobile_page_bottom}`}
                      href="/home-3"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Home 3</li>
                    </Link>
                    {/* <div className="hr_minus"></div> */}
                  </ul>
                </div>
              </li>
              <div className={navStyle.hr}></div>
              <li
                className={navStyle.nav_item}
                onClick={() => setIsClick(false)}
              >
                <Link className={navStyle.nav_link} href="/explore">
                  Explore
                </Link>
              </li>
              <div className={navStyle.hr}></div>
              <li
                className={navStyle.nav_item}
                onClick={() => setIsClick(false)}
              >
                <Link className={navStyle.nav_link} href="/activity-1">
                  Activity
                </Link>
              </li>
              <div className={navStyle.hr}></div>
              <li className={navStyle.nav_item} id={navStyle.sub_menu}>
                <div className={navStyle.sub_menu} onClick={handleSubPage}>
                  <span className={navStyle.nav_link} href="#">
                    Pages
                  </span>
                  <div className={navStyle.sub_menu_icon_div}>
                    <div className={navStyle.sub_menu_icon}>
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
                <div className={`${isSubPageClick ? navStyle.hr : ""}`}></div>
                <div
                  className={
                    isSubPageClick
                      ? navStyle.sub_nav_open
                      : navStyle.mobile_pages_group_display_none
                  }
                  id={navStyle.mobile_sub_nav_display_none}
                >
                  <ul className={navStyle.mobile_pages_group}>
                    <Link
                      className={`${navStyle.mobile_page} ${navStyle.mobile_page_top}`}
                      href="/explore-v2"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Explore V2</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/live-auctions"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Live Auctions</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/collection"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Collection</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/creators"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Creators</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/activity-1"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Activity V1</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/activity-2"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Activity V2</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/singleitem"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Single Item</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/wallet"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Wallet</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/create-item"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Create Item</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={navStyle.mobile_page}
                      href="/signup"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Signup</li>
                    </Link>
                    <div className={navStyle.sub_hr}></div>
                    <Link
                      className={`${navStyle.mobile_page} `}
                      href="/login"
                      onClick={() => setIsClick(false)}
                    >
                      <li>Login</li>
                    </Link>
                    {/* <div className={navStyle.hr_minus}></div> */}
                  </ul>
                </div>
              </li>
              <div className={navStyle.hr}></div>
              {/* <li className={navStyle.nav_item}>
                <Link
                  className={navStyle.nav_link}
                  href="#"
                  onClick={() => setIsClick(false)}
                >
                  Authors
                </Link>
              </li> */}
              <div className={navStyle.hr}></div>
              <li className={navStyle.nav_item}>
                <Link
                  className={navStyle.nav_link}
                  href="/contact"
                  onClick={() => setIsClick(false)}
                >
                  Contact
                </Link>
              </li>
              <div className={navStyle.hr}></div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
