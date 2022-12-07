import React from "react";
import HeaderBody from "../components/headers/body/HeaderBody";
import MainBody from "../components/headers/body/MainBody";
import Contact from "../components/headers/Contact";

function MainHeader() {
  return (
    <>
      <Contact />
      <HeaderBody />
      <MainBody />
    </>
  );
}

export default MainHeader;
