import React from "react";
import { Box, Button, Typography } from "@mui/material";
import footerImg from "../../images/imgfooter.png";

const styleBox = {
  backgroundImage: `url(${footerImg})`,
  height: 700,
  color: "#FFF",
};

function ImageFooter() {
  return (
    <Box style={styleBox}>
      <Box sx={{ width: 300, position: "relative", left: 100, top: 150 }}>
        <Typography fontWeight={600} variant="h2">
          Questions about buying or renting?
        </Typography>

        <Button sx={{ width: 300, mt: 3 }} variant="contained" color="error">
          Ask Us
        </Button>
      </Box>
    </Box>
  );
}

export default ImageFooter;
