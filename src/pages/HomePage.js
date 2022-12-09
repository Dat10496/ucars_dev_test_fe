import React from "react";
import { Box, Button, Container, Paper } from "@mui/material";
import CarFilter from "../components/CarFilter";
import CarListingCard from "../components/CarListingCard";

function HomePage() {
  return (
    <Container>
      <Box name="filter">
        <Paper
          sx={{
            position: "relative",
            bottom: "70px",
            height: 140,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CarFilter />
        </Paper>
      </Box>
      <Box name="listing-card-car">
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
    </Container>
  );
}

export default HomePage;
