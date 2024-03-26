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
    <div className="overflow-hidden">
      <SubPageHero {...props} />
      <Contact />
    </div>
  );
};

export default ContactPage;
