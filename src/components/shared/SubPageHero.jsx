import { text } from "@fortawesome/fontawesome-svg-core";
import subPageHeroStyle from "../../styles/sharedStyles/subPageHero.module.css";
import Navbar from "./Navbars/Navbar";

const SubPageHero = ({ title, text1, text2, text3 }) => {
  return (
    <header
      className={subPageHeroStyle.hero}
      style={{
        backgroundImage: `url(/images/heroBg&footerBg/maximum-hero-footer-bg/maximum-page-hero-bg.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Navbar />
      <div className={subPageHeroStyle.hero_main_content}>
        <h1 className={subPageHeroStyle.hero_title}>{title}</h1>
        <div className={subPageHeroStyle.hero_item}>
          <small>
            <a className={subPageHeroStyle.link} href="/">
              {text1}
            </a>
          </small>
          <img src="images/vectors&icon/herro-right-arrow.png" alt="" />
          <small>
            <a className={`${subPageHeroStyle.link} ${!text3 && subPageHeroStyle.current_page}`} href="/explore">
              {text2}
            </a>
          </small>
          {text3 && <img src="images/vectors&icon/herro-right-arrow.png" alt="" />}
          <small className={subPageHeroStyle.current_page}>
            <a className={subPageHeroStyle.link_style}>{text3 || ""}</a>
          </small>
        </div>
      </div>
    </header>
  );
};

export default SubPageHero;
