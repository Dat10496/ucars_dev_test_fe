import React from "react";
import { Box, Button, Typography } from "@mui/material";
import footerImg from "../../images/imgfooter.png";
import footerQueryImg from "../../images/footer_queryImg.png";

const styleBox = {
  backgroundImage: `url(${footerImg})`,
  height: 700,
  color: "#FFF",
};

const styleBoxMediaQuery = {
  backgroundImage: `url(${footerQueryImg})`,
  height: 690,
  color: "#FFF",
  backgroundRepeat: "no-repeat",
};

function ImageFooter() {
  return (
    <>
      <Box sx={{ display: { sm: "block", xs: "none" } }} style={styleBox}>
        <Box sx={{ width: 300, position: "relative", left: 100, top: 150 }}>
          <Typography fontWeight={600} variant="h2">
            Questions about buying or renting?
          </Typography>

          <Button sx={{ width: 300, mt: 3 }} variant="contained" color="error">
            Ask Us
          </Button>
        </Box>
      </Box>

      {/* media-query */}
      <Box
        sx={{
          m: 1,
          display: { xs: "block", sm: "none", md: "none", color: "#FFFF" },
        }}
        style={styleBoxMediaQuery}
      >
        <Box
          sx={{
            width: 300,
            position: "relative",
            left: 50,
            top: 50,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: 550,
          }}
        >
          <Typography fontWeight={600} variant="h2">
            Questions about buying or renting?
          </Typography>

          <Button sx={{ width: 300, mt: 3 }} variant="contained" color="error">
            Ask Us
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ImageFooter;
