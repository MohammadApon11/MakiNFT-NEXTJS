import TitleBtnHeader from "@/components/shared/TitleBtnHeader";
import React from "react";
import categoriesStyle from "../../styles/home-1/Categories.module.css";

const Categories = () => {
  return (
    <section className={categoriesStyle.categories}>
      <TitleBtnHeader path={"/activity"} title={"Categories"} />
      <div className={categoriesStyle.categories_card_group}>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_half_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-1.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>
              Creative Arts
            </h2>
            <p className={categoriesStyle.categories_effect_description}>
              Items: 90
            </p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_half_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-2.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_half_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-3.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_half_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-4.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_half_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-3.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.down_one_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-4.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.categories_card_hide} ${categoriesStyle.down_one_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-3.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.categories_card_hide} ${categoriesStyle.down_one_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-2.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.categories_card_hide} ${categoriesStyle.categories_card_double_hide} ${categoriesStyle.down_one_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-1.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
        <div
          className={`${categoriesStyle.categories_card} ${categoriesStyle.categories_card_hide} ${categoriesStyle.categories_card_single_hide} ${categoriesStyle.down_one_s}`}
        >
          <img
            className={categoriesStyle.categories_card_image}
            src="images/commonCard2/card-4.jpg"
            alt=""
          />
          <div className={categoriesStyle.categories_effect}>
            <h2 className={categoriesStyle.categories_effect_title}>Creative Arts</h2>
            <p className={categoriesStyle.categories_effect_description}>Items: 90</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
