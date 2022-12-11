import React from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import CarFilter from "../components/CarFilter";
import CarListingCard from "../components/CarListingCard";

function HomePage() {
  return (
    <Stack>
      <Box name="filter">
        <Paper
          sx={{
            position: "relative",
            bottom: { sm: "70px", xs: "120px" },
            height: { sm: 140, xs: 480 },
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CarFilter />
        </Paper>
      </Box>
      <Box p={2} name="listing-card-car">
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
        <Button color="error" variant="outlined">
          View more new cars
        </Button>
      </Box>
    </Stack>
  );
}

export default HomePage;
