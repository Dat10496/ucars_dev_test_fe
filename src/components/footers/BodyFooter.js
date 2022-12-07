import React from "react";
import { Box, Button, Typography } from "@mui/material";

function BodyFooter() {
  return (
    <Box sx={{ height: 500, p: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ width: 450 }}>
          <Typography variant="h4" fontWeight={700} sx={{ color: "#EE1B24" }}>
            Our Featured Vehicles.
          </Typography>
          <Typography variant="body1" mt={3}>
            One of our biggest product to be featured and that has sold out the
            most.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",

            justifyContent: "flex-end",
            flexDirection: "column",
          }}
        >
          <Button sx={{ height: 30 }} color="error" variant="contained">
            View More
          </Button>
        </Box>
      </Box>

      <Box></Box>
    </Box>
  );
}

export default BodyFooter;
