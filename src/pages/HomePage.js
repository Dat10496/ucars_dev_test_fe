import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CarFilter from "../components/CarFilter";
import CarListingCard from "../components/CarListingCard";

function HomePage() {
  return (
    <Stack>
      <Box
        name="filter"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            position: "relative",
            bottom: { sm: 70, xs: 90 },
            height: { sm: 140, xs: 480 },
            width: { sm: 1142, xs: 343 },
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CarFilter />
        </Paper>
      </Box>

      <Box
        sx={{
          width: { sm: 1142, xs: 300 },
          height: { sm: 746 },
          position: "relative",
          left: 62,
        }}
        name="listing-card-car"
      >
        <CarListingCard />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          color: "#EE1B24",
        }}
      >
        <Button
          sx={{ width: 194, height: 40 }}
          color="error"
          variant="outlined"
        >
          <Typography fontWeight={500} fontSize={12}>
            View more new cars
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}

export default HomePage;
