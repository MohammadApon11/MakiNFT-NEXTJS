import React from "react";
import footerHome2 from "../../../styles/sharedStyles/footers/FooterHome2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FooterHome2 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={footerHome2.footer_2}>
      <div className={footerHome2.footer_2_description}>
        <div className={footerHome2.footer_2_header}>
          <h1 className={footerHome2.footer_2_title}>Makinft</h1>
          <div className={footerHome2.footer_2_media}>
            <div className={footerHome2.media_image_container}>
              <img src="images/vectors&icon/in.png" alt="" />
            </div>
            <div className={footerHome2.media_image_container}>
              <img src="images/vectors&icon/ins.png" alt="" />
            </div>
            <div className={footerHome2.media_image_container}>
              <img src="images/vectors&icon/you.png" alt="" />
            </div>
            <div className={footerHome2.media_image_container}>
              <img src="images/vectors&icon/f.png" alt="" />
            </div>
          </div>
        </div>
        <div className={footerHome2.footer_address}>
          <div className={footerHome2.footer_input_style}>
            <h1 className={footerHome2.footer_title}>Subscribe Newsletter</h1>
            <div className={footerHome2.home_2_footer_input_container}>
              <input
                className={footerHome2.home_2_footer_input}
                type="text"
                name="Email address"
                id=""
                placeholder="Email address"
              />
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div>
            <p className={footerHome2.footer_title_description}>Quick Links</p>
            <div className={footerHome2.footer_description_flex}>
              <p className={footerHome2.footer_address_description}>services</p>
              <p className={footerHome2.footer_address_description}>
                Testimonial
              </p>
              <p className={footerHome2.footer_address_description}>careers</p>
              <p className={footerHome2.footer_address_description}>About Us</p>
              <p className={footerHome2.footer_address_description}>Contact</p>
            </div>
          </div>
          <div>
            <p className={footerHome2.footer_title_description}>My Account</p>
            <div className={footerHome2.footer_description_flex}>
              <p className={footerHome2.footer_address_description}>Author</p>
              <p className={footerHome2.footer_address_description}>
                Collraction
              </p>
              <p className={footerHome2.footer_address_description}>
                Author Profile
              </p>
              <p className={footerHome2.footer_address_description}>
                Create Item
              </p>
            </div>
          </div>
          <div>
            <p className={footerHome2.footer_title_description}>Resource</p>
            <div className={footerHome2.footer_description_flex}>
              <p className={footerHome2.footer_address_description}>
                Turorials
              </p>
              <p className={footerHome2.footer_address_description}>Product</p>
              <p className={footerHome2.footer_address_description}>Newsroom</p>
            </div>
          </div>
        </div>
        <div className={footerHome2.footer_vertical}></div>
        <div className={footerHome2.copyright}>
          <p>
            <a href="https://solutya.com/">
              &copy;{`${currentYear} `}
              Solutya Pvt. Ltd. All right reserved
            </a>
          </p>
          <div className={footerHome2.copyright_policy}>
            <p>Company</p>
            <p>Privacy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome2;
