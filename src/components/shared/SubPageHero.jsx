import { text } from "@fortawesome/fontawesome-svg-core";
import subPageHeroStyle from "../../styles/sharedStyles/subPageHero.module.css";
import Navbar from "./Navbars/Navbar";
import Reveal from "../framer-motion/Reveal";
import { TransitionWrapper1 } from "../framer-motion/TransitionWrapper";

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
        <Reveal center={true} title={true}>
          <h1 className={subPageHeroStyle.hero_title}>{title}</h1>
        </Reveal>
        <div className={subPageHeroStyle.hero_item}>
          <TransitionWrapper1 index={1}>
            <a className={subPageHeroStyle.link} href="/">
              {text1}
            </a>
          </TransitionWrapper1>
          <img src="images/vectors&icon/herro-right-arrow.png" alt="" />
          <TransitionWrapper1 index={3}>
            <span
              className={`${subPageHeroStyle.link} ${
                !text3 && subPageHeroStyle.current_page
              }`}
            >
              {text2}
            </span>
          </TransitionWrapper1>
          {text3 && (
            <img src="images/vectors&icon/herro-right-arrow.png" alt="" />
          )}
          <TransitionWrapper1 index={5}>
            <span className={subPageHeroStyle.link_style}>{text3 || ""}</span>
          </TransitionWrapper1>
        </div>
      </div>
    </header>
  );
};

export default SubPageHero;
