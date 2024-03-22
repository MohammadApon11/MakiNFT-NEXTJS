import SubPageHero from "@/components/shared/SubPageHero";
import React from "react";
import CreateItem from "./CreateItem";

const CreateItemPage = () => {
  const props = {
    title: "Create Item",
    text1: "Home",
    text2: "Create Item",
  };
  return (
    <>
      <SubPageHero {...props} />
      <CreateItem />
    </>
  );
};

export default CreateItemPage;
