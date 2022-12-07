import React from "react";
import BottomFooter from "../components/footers/BottomFooter";
import HeaderFooter from "../components/footers/HeaderFooter";
import ImageFooter from "../components/footers/ImageFooter";
import BodyFooter from "../components/footers/BodyFooter";
import InFormFooter from "../components/footers/InFormFooter";

function MainFooter() {
  return (
    <>
      <HeaderFooter />
      <BodyFooter />
      <ImageFooter />
      <InFormFooter />
      <BottomFooter />
    </>
  );
}

export default MainFooter;
