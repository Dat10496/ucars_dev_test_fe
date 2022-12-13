import React from "react";
import BottomFooter from "../components/footers/BottomFooter";
import HeaderFooter from "../components/footers/HeaderFooter";
import ImageFooter from "../components/footers/ImageFooter";
import BodyFooter from "../components/footers/BodyFooter";
import InFormFooter from "../components/footers/InFormFooter";
import { Box } from "@mui/material";

function MainFooter() {
  return (
    <Box mt={2}>
      <HeaderFooter />
      <BodyFooter />
      <ImageFooter />
      <InFormFooter />
      <BottomFooter />
    </Box>
  );
}

export default MainFooter;
