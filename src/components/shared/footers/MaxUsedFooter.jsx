import React from "react";
import footerStyle from "../../../styles/sharedStyles/footers/subPageFooter.module.css";

const MaxUsedFooter = () => {
  return (
    <div>
      <footer
        className={footerStyle.footer_1}
        style={{
          backgroundImage: `url(/images/heroBg&footerBg/maximum-hero-footer-bg/maximum-footer-bg.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={footerStyle.footer_1_description}>
          <div className={footerStyle.footer_address}>
            <div className={footerStyle.footer_input_style}>
              <h1 className={footerStyle.footer_title}>Makinft</h1>
              <h4 className={footerStyle.footer_subtitle}>
                Subscribe Newsletter
              </h4>
              <div className={footerStyle.footer_1_input_flex}>
                <div className={footerStyle.footer_arrow_flex}>
                  <input
                    className={footerStyle.footer_input}
                    type="text"
                    name="Enter email address"
                    id=""
                    placeholder="Email address"
                  />
                  <img
                    className={footerStyle.footer_arrow}
                    src="images/heroBg&footerBg/maximum-hero-footer-bg/maximum-footer-icon.png"
                    alt=""
                  />
                </div>
                <div className={footerStyle.footer_1_media}>
                  <div className={footerStyle.media_image_container}>
                    <img src="images/vectors&icon/in.png" alt="" />
                  </div>
                  <div className={footerStyle.media_image_container}>
                    <img src="images/vectors&icon/ins.png" alt="" />
                  </div>
                  <div className={footerStyle.media_image_container}>
                    <img src="images/vectors&icon/you.png" alt="" />
                  </div>
                  <div className={footerStyle.media_image_container}>
                    <img src="images/vectors&icon/f.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={footerStyle.footer_links}>
              <p className={footerStyle.footer_title_description}>My Account</p>
              <p className={footerStyle.footer_address_description}>
                Create Dashboard
              </p>
              <p className={footerStyle.footer_address_description}>Wallet</p>
              <p className={footerStyle.footer_address_description}>
                Create Team
              </p>
              <p className={footerStyle.footer_address_description}>My NFTs</p>
            </div>
            <div className={footerStyle.footer_links}>
              <p className={footerStyle.footer_title_description}>
                Useful Links
              </p>
              <p className={footerStyle.footer_address_description}>All NFTs</p>
              <p className={footerStyle.footer_address_description}>
                How It Works
              </p>
              <p className={footerStyle.footer_address_description}>Create</p>
              <p className={footerStyle.footer_address_description}>Explore</p>
              <p className={footerStyle.footer_address_description}>
                Collection
              </p>
            </div>
            <div className={footerStyle.footer_links_extra_gap}>
              <p className={footerStyle.footer_title_description}>Contact Us</p>
              <p className={footerStyle.footer_address_description}>
                A: 1245 Center avenew Makinft,
              </p>
              <p className={footerStyle.footer_address_description}>
                P: +1234567890
              </p>
              <p className={footerStyle.footer_address_description}>
                E: Support@makinft.com
              </p>
            </div>
          </div>
          <div className={footerStyle.copyright}>
            <p>
              &copy; Copyright-
              {new Date().getFullYear()} MakiNFT. Developed By-{" "}
              <span className={footerStyle.solutya}>Solutya Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MaxUsedFooter;
