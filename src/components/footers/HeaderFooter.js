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
    textAlign: "center",
  },
};

function HeaderFooter() {
  return (
    <Box
      sx={{
        height: { sm: 810, xs: 1253 },
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
        <Typography
          fontSize={{ sm: 48, xs: 32 }}
          fontWeight={700}
          sx={{ color: "#EE1B24" }}
        >
          How it works.
        </Typography>
        <Typography fontSize={{ sm: 32, xs: 20 }} fontWeight={400}>
          This is how our products works
        </Typography>
      </Box>

      <Box
        sx={{
          display: { sm: "flex", xs: "flex" },
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: { sm: "space-evenly", xs: "space-between" },
          alignItems: "center",
          height: { sm: 610, xs: 1100 },
        }}
      >
        <Box sx={styles.styleBox}>
          <PinDropIcon sx={{ width: 75, height: 105 }} />
          <Typography fontWeight={500} fontSize={{ sm: 36, xs: 24 }}>
            Find Car
          </Typography>
          <Typography fontSize={{ sm: 24, xs: 16 }} fontWeight={400}>
            Our cars are located at prime areas where by there won't be problem
            with transportation
          </Typography>
        </Box>

        <Box sx={styles.styleBox}>
          <Box component="img" src={MakePaymentImg} />

          <Typography fontWeight={500} fontSize={{ sm: 36, xs: 24 }}>
            Make payments
          </Typography>
          <Typography fontSize={{ sm: 24, xs: 16 }} fontWeight={400}>
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </Typography>
        </Box>

        <Box sx={styles.styleBox}>
          <Box component="img" src={MakeItOffical} />

          <Typography fontWeight={500} fontSize={{ sm: 36, xs: 24 }}>
            Make it Official{" "}
          </Typography>
          <Typography fontSize={{ sm: 24, xs: 16 }} fontWeight={400}>
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderFooter;
