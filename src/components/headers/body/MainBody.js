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
    <>
      <Box
        style={styles.styleHeader}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box
          sx={{
            position: "relative",
            width: 540,
            height: 220,
            left: 108,
            top: 97,
            gap: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography fontWeight={700} fontSize={60}>
            Car Marketplace
          </Typography>
          <Typography fontWeight={400} fontSize={18}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </Typography>

          <Button
            sx={{ width: 196, height: 52 }}
            variant="contained"
            color="error"
          >
            Get Stared
          </Button>
        </Box>
      </Box>

      {/* media-query */}
      <Box
        sx={{
          color: "#FFF",
          alignItems: "center",
          flexDirection: "column",
          display: { xs: "flex", sm: "none" },
          height: 250,
          pt: 1,
        }}
      >
        <Box width={343} height={142}>
          <Box
            sx={{ borderRadius: 2 }}
            component="img"
            alt="picture"
            src={ImgHeader}
            width="100%"
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            right: 65,
            bottom: 130,
            gap: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography fontWeight={700} fontSize={20}>
            Car Marketplace
          </Typography>

          <Box sx={{ width: 180 }}>
            <Typography fontSize={7} fontWeight={300}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer.
            </Typography>

            <Button
              sx={{ width: 80, height: 20, mt: 2 }}
              variant="contained"
              color="error"
            >
              <Typography fontSize={7} fontWeight={500}>
                Get Started
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MainBody;
