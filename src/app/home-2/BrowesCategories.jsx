import React from "react";
import browesStyles from "../../styles/home-2/BrowesCategories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TitleBtnHeader from "@/components/shared/TitleBtnHeader";
import Link from "next/link";

const BrowesCategories = () => {
  return (
    <section className={browesStyles.brows_container}>
      <TitleBtnHeader path={"/explore"} title={"Browes Categories"} />
      <div className={browesStyles.brows_card_group}>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.left_one_s}`}
        >
          <img
            className={browesStyles.brows_card_image}
            src="images/home-2-categories/card-1.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.left_half_s} ${browesStyles.left_half_s}`}
        >
          <img
            className={browesStyles.brows_card_image}
            src="images/home-2-categories/card-2.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.left_half_s} ${browesStyles.left_half_s}`}
        >
          <img
            className={browesStyles.brows_card_image}
            src="images/home-2-categories/card-3.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.three_hide_768_541} ${browesStyles.right_half_s}`}
        >
          <img
            className={`${browesStyles.brows_card_image} ${browesStyles.three_hide_768_541}`}
            src="images/home-2-categories/card-1.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.two_hide_1024_769} ${browesStyles.right_half_s}`}
        >
          <img
            className={`${browesStyles.brows_card_image} ${browesStyles.two_hide_1024_769} ${browesStyles.three_hide_768_541}`}
            src="images/home-2-categories/card-2.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
        <Link href="explore"
          className={`${browesStyles.brows_card} ${browesStyles.one_hide_1200_1025} ${browesStyles.right_one_s} ${browesStyles.left_right_show}`}
        >
          <img
            className={`${browesStyles.brows_card_image} ${browesStyles.one_hide_1200_1025} ${browesStyles.three_hide_768_541}`}
            src="images/home-2-categories/card-3.jpg"
            alt=""
          />
          <div className={browesStyles.brows_effect}></div>
          <div className={browesStyles.brows_effect_title_arrow}>
            <div className={browesStyles.effect_title_number}>
              <h3 className={browesStyles.brows_effect_title}>Create Arts</h3>
              <span className={browesStyles.item_number}>Items: 90</span>
            </div>
            <div className={browesStyles.brows_arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BrowesCategories;
