import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ImgHeader from "../../../images/headerImg.jpg";

const styles = {
  styleHeader: {
    backgroundImage: `url(${ImgHeader})`,
    height: 520,
    color: "#FFFFFF",
  },
};

function MainBody() {
  return (
    <Box style={styles.styleHeader}>
      <Box
        sx={{
          position: "absolute",
          width: 540,
          height: 220,
          left: 100,
          top: 246,
          gap: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography fontWeight={700} variant="h2">
          Car Marketplace
        </Typography>
        <Typography varian="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </Typography>

        <Button variant="contained" color="error">
          Get Stared
        </Button>
      </Box>
    </Box>
  );
}

export default MainBody;
