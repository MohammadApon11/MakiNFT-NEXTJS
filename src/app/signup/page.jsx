import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import SignUp from "./SignUp";

const SignupPgae = () => {
  const props = {
    title: "Signup",
    text1: "Home",
    text2: "Signup",
  };
  return (
    <>
      <SubPageHero {...props} />
      <SignUp />
    </>
  );
};

export default SignupPgae;
