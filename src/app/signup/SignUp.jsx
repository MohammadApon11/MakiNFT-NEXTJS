import React from "react";
import signupStyles from "../../styles/signup/signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  return (
    <section className={signupStyles.signup_section_container}>
      <h1 className={signupStyles.title}>Signup To NFTs</h1>
      <div className={signupStyles.with_social}>
        <div className={signupStyles.vl}></div>
        <span>Signup with Social</span>
        <div className={signupStyles.vl}></div>
      </div>
      <div className={signupStyles.fb_google_btn}>
        <button className={signupStyles.social_btn}>
          <FontAwesomeIcon id={signupStyles.google_btn}  icon={faGoogle} /> Google
        </button>
        <button className={signupStyles.social_btn}>
          <FontAwesomeIcon id={signupStyles.fb_btn} icon={faFacebookF} /> Facebook
        </button>
      </div>
      <div className={signupStyles.with_social}>
        <div className={signupStyles.vl}></div>
        <span>Signup with Email</span>
        <div className={signupStyles.vl}></div>
      </div>
      <form className={signupStyles.nft_input_form}>
        <div className={signupStyles.nft_input_group}>
          <input
            className={signupStyles.input_field}
            type="text"
            name=""
            id=""
            placeholder="Full Name"
          />
          <input
            className={signupStyles.input_field}
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <input
            className={signupStyles.input_field}
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        <div className={signupStyles.checkbox_forget}>
          <div>
            <input
              className={signupStyles.checkbox_btn}
              type="checkbox"
              name=""
              id="remember"
            />
            <label htmlFor="remember">Remember Password</label>
          </div>
          <p>Forget Password ?</p>
        </div>
        <input className={signupStyles.submit_btn} type="submit" value="Signup" />
      </form>
    </section>
  );
};

export default SignUp;
