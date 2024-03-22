import React from "react";
import loginStyles from "../../styles/login/login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  return (
    <div>
      <section className={loginStyles.login_section_container}>
        <h1 className={loginStyles.title}>login To NFTs</h1>
        <div className={loginStyles.with_social}>
          <div className={loginStyles.vl}></div>
          <span>login with Social</span>
          <div className={loginStyles.vl}></div>
        </div>
        <div className={loginStyles.fb_google_btn}>
          <button className={loginStyles.social_btn}>
            <FontAwesomeIcon id={loginStyles.google_btn} icon={faGoogle} />{" "}
            Google
          </button>
          <button className={loginStyles.social_btn}>
            <FontAwesomeIcon id={loginStyles.fb_btn} icon={faFacebookF} />{" "}
            Facebook
          </button>
        </div>
        <div className={loginStyles.with_social}>
          <div className={loginStyles.vl}></div>
          <span>login with Email</span>
          <div className={loginStyles.vl}></div>
        </div>
        <form className={loginStyles.nft_input_form}>
          <div className={loginStyles.nft_input_group}>
            <input
              className={loginStyles.input_field}
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <input
              className={loginStyles.input_field}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <div className={loginStyles.checkbox_forget}>
            <div>
              <input
                className={loginStyles.checkbox_btn}
                type="checkbox"
                name=""
                id="remember"
              />
              <label htmlFor="remember">Remember Password</label>
            </div>
            <p>Forget Password ?</p>
          </div>
          <input
            className={loginStyles.submit_btn}
            type="submit"
            value="Login"
          />
        </form>
      </section>
    </div>
  );
};

export default Login;
