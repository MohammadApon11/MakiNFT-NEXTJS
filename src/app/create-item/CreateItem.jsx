import React from "react";
import createItemStyles from "../../styles/create-item/createItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTag, faArrowUp,faStar,faShareNodes,faHeart,faHammer } from "@fortawesome/free-solid-svg-icons";
import { faClock, faUser } from "@fortawesome/free-regular-svg-icons";

const CreateItem = () => {
  return (
    <section className={createItemStyles.create_item_section}>
      <div className={createItemStyles.create_item_container}>
        <div
          className={`${createItemStyles.item_upload_container} ${createItemStyles.left_one_s}`}
        >
          <i className={createItemStyles.download_icon}>
            <FontAwesomeIcon icon={faDownload} />
          </i>
          <h4 className={createItemStyles.choose_file}>Choose a File</h4>
          <p className={createItemStyles.file_format}>
            PNG,JPEG,GIF,WEBP,
            <br />
            MP3,MP4,HD Max 400MB
          </p>
          <input
            type="file"
            id="file-input"
            accept=".png, .jpeg, .jpg, .gif, .webp, .mp3, .mp4"
            style={{ display: "none" }}
          />
        </div>
        <form
          className={`${createItemStyles.item_info_container} ${createItemStyles.left_half_s}`}
        >
          <div>
            <p className={createItemStyles.label}>Title</p>
            <input
              className={createItemStyles.same_input}
              type="text"
              name=""
              id="title"
              placeholder="NFTs Title Here"
            />
          </div>
          <div>
            <p className={createItemStyles.label}>Description</p>
            <textarea
              className={createItemStyles.text_area}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description Here"
            ></textarea>
          </div>
          <div className={createItemStyles.select_method}>
            <label className={createItemStyles.label}>Select Method</label>
            <div className={createItemStyles.item_additional_info_btn_group}>
              <button className={createItemStyles.additional_info_btn} disabled>
                <FontAwesomeIcon icon={faTag} />
                <span>Fixed Price</span>
              </button>
              <button className={createItemStyles.additional_info_btn} disabled>
                <FontAwesomeIcon icon={faClock} />
                <span>Time Auctions</span>
              </button>
              <button className={createItemStyles.additional_info_btn} disabled>
                <FontAwesomeIcon icon={faUser} />
                <span>Opens for bids</span>
              </button>
            </div>
          </div>
          <div className={createItemStyles.price_size_category_container}>
            <div>
              <p className={createItemStyles.label}>Price</p>
              <select
                className={createItemStyles.select_price}
                name="price"
                id="price"
              >
                <option value="$20">$20</option>
                <option value="$40">$40</option>
                <option value="$60">$60</option>
                <option value="$80">$80</option>
              </select>
            </div>
            <div>
              <p className={createItemStyles.label}>Size</p>
              <input
                className={createItemStyles.mb_input}
                type="text"
                name="mb"
                placeholder="148 mb"
                id="mb"
              />
            </div>
            <div>
              <p className={createItemStyles.label}>Category</p>
              <select
                className={createItemStyles.category_input}
                name="category"
                id="category"
              >
                <option value="creative">Creative</option>
                <option value="exclusive">Exclusive</option>
                <option value="exclusive">Exclusive</option>
                <option value="sunshine">Sunshine</option>
              </select>
            </div>
          </div>
          <div>
            <p className={createItemStyles.label}>Royality</p>
            <input
              className={createItemStyles.same_input}
              type="text"
              name="royality"
              id="royality"
              placeholder="20%"
            />
          </div>
          <div className={createItemStyles.preview_submit}>
            <button className={createItemStyles.preview_btn} disabled>
              Preview
            </button>
            <button className={createItemStyles.submit_btn} disabled>
              Submit Item
            </button>
          </div>
        </form>
        <div
          className={`${createItemStyles.card_area} ${createItemStyles.right_one_s}`}
        >
          <div className={createItemStyles.card_content}>
            <div className={createItemStyles.card_image_container}>
              <div className={createItemStyles.create_item_card_image}>
                <img src="images/commonCard2/card-2.jpg" alt="" />
              </div>
              <div className={createItemStyles.card_effect}>
                <FontAwesomeIcon icon={faClock} />
                <span>
                  24<small>d</small>
                </span>
                <div className={createItemStyles.vl}></div>
                <span>
                  04<small>h</small>
                </span>
                <div className={createItemStyles.vl}></div>
                <span>
                  12<small>m</small>
                </span>
                <div className={createItemStyles.vl}></div>
                <span>
                  02<small className={createItemStyles.second}>s</small>
                </span>
              </div>
            </div>
            <p className={createItemStyles.bid_text}>
            <FontAwesomeIcon icon={faArrowUp} />
               Highest bid 0.24ETH
            </p>
            <div className={createItemStyles.card_title_container}>
              <p className={createItemStyles.create_item_card_title}>
                Morganitho
              </p>
              <div className={createItemStyles.card_title_icon}>
                <div className={createItemStyles.card_title_icon_container}>
                <i className={createItemStyles.star}><FontAwesomeIcon icon={faStar} /></i>
                </div>
                <div className={createItemStyles.card_title_icon_container}>
              <i className={createItemStyles.share}>  <FontAwesomeIcon icon={faShareNodes} /></i>
                </div>
                <div className={createItemStyles.card_title_icon_container}>
               <i className={createItemStyles.love}> <FontAwesomeIcon icon={faHeart} /></i>
                </div>
              </div>
            </div>
            <div className={createItemStyles.profile_progress}>
              <div className={createItemStyles.left_profile}>
                <div className={createItemStyles.profile_image_group}>
                  <div className={createItemStyles.profile_image_div}>
                    <img
                      className={createItemStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${createItemStyles.profile_image_div} ${createItemStyles.profile_image_div_1}`}
                  >
                    <img
                      className={createItemStyles.profile_image}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className={`${createItemStyles.profile_plus_div} ${createItemStyles.profile_image_div_2}`}
                  >
                    <img
                      className={`${createItemStyles.profile_image_opacity} ${createItemStyles.profile_image_three}`}
                      src="images/profile/profile-2.jpg"
                      alt=""
                    />
                    <small>+</small>
                  </div>
                </div>
                <small className={createItemStyles.bids}>12+Bids</small>
              </div>
              <div className={createItemStyles.right_profile}>
                <div className={createItemStyles.guary_div}>
                  <img src="images/vectors&icon/watch.png" alt="" />
                </div>
                <small className={createItemStyles.new_bid}>New Bid:</small>
                <small className={createItemStyles.ETH}>0.16ETH</small>
              </div>
            </div>
            <button className={createItemStyles.card_btn}>
            <FontAwesomeIcon icon={faHammer} /> Place Bid
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateItem;
