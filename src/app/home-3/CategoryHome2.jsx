import React from "react";
import categoryStles from "../../styles/home-3/categoryHome2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import SectionSubTitleAndTitle from "@/components/shared/sectionsTitle/SectionSubTitleAndTitle";
import Link from "next/link";

const CategoryHome2 = () => {
  return (
    <section className={categoryStles.home_3_category_container}>
      <SectionSubTitleAndTitle title="NFTs Categories" subTitle="CATEGORY" />
      <div className={categoryStles.home_3_category_card_group}>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="images/home-3-categories/card-4.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="/images/home-3-categories/card-2.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="images/home-3-categories/card-3.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.three_hide_480_359} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="images/home-3-categories/card-4.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.two_hide_768_541} ${categoryStles.three_hide_480_359} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="/images/home-3-categories/card-2.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
        <Link href="explore-v2"
          className={`${categoryStles.home_3_category_card} ${categoryStles.one_hide_1024_769} ${categoryStles.two_hide_768_541} ${categoryStles.three_hide_480_359} ${categoryStles.down_half_s}`}
        >
          <img
            className={categoryStles.home_3_category_card_image}
            src="images/home-3-categories/card-1.jpg"
            alt=""
          />
          <div className={categoryStles.home_3_arrow_container}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryHome2;
