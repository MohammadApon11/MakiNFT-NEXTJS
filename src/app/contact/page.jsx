import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import Contact from "./Contact";

const ContactPage = () => {
  const props = {
    title: "Contact",
    text1: "Home",
    text2: "Contact",
  };
  return (
    <>
      <SubPageHero {...props} />
      <Contact />
    </>
  );
};

export default ContactPage;
