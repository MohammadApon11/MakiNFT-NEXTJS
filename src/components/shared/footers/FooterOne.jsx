import React from "react";
import footerOneStyle from "../../../styles/sharedStyles/footers/footerOne.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { ImArrowRight2 } from "react-icons/im";
import footerBg from "../../../../public/images/heroBg&footerBg/home-1-hero&footer/home-1-footer-bg.png";

const FooterOne = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className={footerOneStyle.footer_1}
        style={{
          backgroundImage: `url(${footerBg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className={footerOneStyle.footer_1_description}>
          <div className={footerOneStyle.footer_1_header}>
            <h1 className={footerOneStyle.footer_1_title}>Makinft</h1>
            <div className={footerOneStyle.footer_1_media}>
              <div className={footerOneStyle.media_image_container}>
                <BiLogoLinkedin />
              </div>
              <div className={footerOneStyle.media_image_container}>
                <AiOutlineInstagram />
              </div>
              <div className={footerOneStyle.media_image_container}>
                <BsYoutube />
              </div>
              <div className={footerOneStyle.media_image_container}>
                <FaFacebookF />
              </div>
            </div>
          </div>
          <div className={footerOneStyle.footer_vertical}></div>
          <div className={footerOneStyle.footer_address}>
            <div className={footerOneStyle.footer_input_style}>
              <h1 className={footerOneStyle.footer_title}>Subscribe Newsletter</h1>
              <div className={footerOneStyle.footer_1_input_flex}>
                <input
                  className={footerOneStyle.footer_input}
                  type="text"
                  name="Enter email address"
                  id=""
                  placeholder="Enter email address"
                />
                <button className={footerOneStyle.footer_btn}>
                  <ImArrowRight2 />
                </button>
              </div>
            </div>
            <div>
              <h3 className={footerOneStyle.footer_title_description}>
                Quick Links
              </h3>
              <div className={footerOneStyle.footer_description_flex}>
                <p className={footerOneStyle.footer_address_description}>
                  services
                </p>
                <p className={footerOneStyle.footer_address_description}>
                  Testimonial
                </p>
                <p className={footerOneStyle.footer_address_description}>careers</p>
                <p className={footerOneStyle.footer_address_description}>
                  About Us
                </p>
                <p className={footerOneStyle.footer_address_description}>Contact</p>
              </div>
            </div>
            <div>
              <h3 className={footerOneStyle.footer_title_description}>
                My Account
              </h3>
              <div className={footerOneStyle.footer_description_flex}>
                <p className={footerOneStyle.footer_address_description}>Author</p>
                <p className={footerOneStyle.footer_address_description}>
                  Collraction
                </p>
                <p className={footerOneStyle.footer_address_description}>
                  Author Profile
                </p>
                <p className={footerOneStyle.footer_address_description}>
                  Create Item
                </p>
              </div>
            </div>
            <div>
              <h3 className={footerOneStyle.footer_title_description}>Resource</h3>
              <div className={footerOneStyle.footer_description_flex}>
                <p className={footerOneStyle.footer_address_description}>
                  Turorials
                </p>
                <p className={footerOneStyle.footer_address_description}>Product</p>
                <p className={footerOneStyle.footer_address_description}>
                  Newsroom
                </p>
              </div>
            </div>
          </div>
          <div className={footerOneStyle.copyright}>
            <p>
              &copy;
              <span>{currentYear} </span>
              Solutya Pvt. Ltd. All right reserved
            </p>
            <div className={footerOneStyle.copyright_policy}>
              <p>Company</p>
              <p>Privacy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
