import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import Login from "./Login";

const LoginPage = () => {
  const props = {
    title: "Login",
    text1: "Home",
    text2: "Login",
  };
  return (
    <div className="overflow-hidden">
      <SubPageHero {...props} />
      <Login />
    </div>
  );
};

export default LoginPage;
