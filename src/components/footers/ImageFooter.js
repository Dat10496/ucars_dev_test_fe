import React from "react";
import { Box, Button, Typography } from "@mui/material";
import footerImg from "../../images/imgfooter.png";
import footerQueryImg from "../../images/footer_queryImg.png";

const styleBox = {
  backgroundImage: `url(${footerImg})`,
  height: 700,
  backgroundRepeat: "no-repeat",
  color: "#FFFFFF",
};

const styleBoxMediaQuery = {
  backgroundImage: `url(${footerQueryImg})`,
  height: 700,
  color: "#FFFFFF",
  backgroundRepeat: "no-repeat",
  maxWidth: 600,
};

function ImageFooter() {
  return (
    <>
      <Box sx={{ display: { sm: "block", xs: "none" } }} style={styleBox}>
        <Box
          sx={{
            width: 390,
            height: 456,
            position: "relative",
            left: 100,
            top: 100,
          }}
        >
          <Typography fontWeight={600} fontSize={76}>
            Questions about buying or renting?
          </Typography>

          <Button
            sx={{ width: 410, height: 60, mt: 3 }}
            variant="contained"
            color="error"
          >
            <Typography fontSize={16} fontWeight={600}>
              Ask Us
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* ------------------ media-query ------------------------ */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none", color: "#FFFF" },
          height: 694,
          justifyContent: "center",
        }}
        style={styleBoxMediaQuery}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 246,
              position: "relative",
              top: 80,
              height: 288,
            }}
          >
            <Typography fontWeight={600} fontSize={48}>
              Questions about buying or renting?
            </Typography>
          </Box>

          <Box sx={{ position: "relative", top: 260 }}>
            <Button
              sx={{ width: 335, height: 60, mt: 3 }}
              variant="contained"
              color="error"
            >
              <Typography fontWeight={600} fontSize={16}>
                Ask Us
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      {/* ------------------------------ */}
    </>
  );
}

export default ImageFooter;
