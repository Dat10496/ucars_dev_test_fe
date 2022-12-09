import React from "react";
import { Box, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MakePaymentImg from "../../images/makepayment.png";
import MakeItOffical from "../../images/makeitoffcial.png";

const styles = {
  styleBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: 300,
    p: 1,
    height: 250,
  },
};

function HeaderFooter() {
  return (
    <Box
      sx={{
        height: 410,
        backgroundColor: "#232323",
        p: 1,
        color: "#FFF",
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography variant="h3" fontWeight={700} sx={{ color: "#EE1B24" }}>
          How it works.
        </Typography>
        <Typography variant="h5" fontWeight={400}>
          This is how our products works{" "}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={styles.styleBox}>
          <PinDropIcon sx={{ width: 75, height: 105 }} />
          <Typography>Find Car</Typography>
          <Typography>
            Our cars are located at prime areas where by there won't be problem
            with transportation
          </Typography>
        </Box>

        <Box sx={styles.styleBox}>
          <Box component="img" src={MakePaymentImg} />

          <Typography>Make payments</Typography>
          <Typography>
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </Typography>
        </Box>

        <Box sx={styles.styleBox}>
          <Box component="img" src={MakeItOffical} />

          <Typography>Make it Official </Typography>
          <Typography>
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderFooter;
