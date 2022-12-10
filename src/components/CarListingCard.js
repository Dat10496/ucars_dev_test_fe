import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { CAR } from "../utils/LabelFilter";
import advertiseImg from "../images/advertise.png";

function CarListingCard() {
  return (
    <Box>
      <Grid container spacing={1.5}>
        <Grid item xs={8} md={4} lg={3}>
          <Box
            component="img"
            src={advertiseImg}
            height="361px"
            width="281px"
          />
        </Grid>
        {CAR.map((car) => (
          <Grid key={car.id} item xs={8} md={4} lg={3}>
            <Card sx={{ width: 281, height: 361 }}>
              <Box
                component="img"
                src={car.image}
                width="282px"
                height="189px"
              />

              <CardContent>
                <Typography
                  variant="subtitle2"
                  fontSize={16}
                  fontWeight={600}
                  gutterBottom
                  noWrap
                >
                  {car.brand}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 200,
                    mb: 1,
                  }}
                >
                  <Box sx={{ display: "flex" }} component="div">
                    <Typography fontWeight={500} variant="body2">
                      From
                    </Typography>
                    <Typography
                      fontWeight={600}
                      variant="body2"
                      sx={{ ml: 0.5, color: "#0F5EDD" }}
                    >
                      {car.price}
                    </Typography>
                  </Box>

                  <Box component="div" sx={{ backgroundColor: "#E5EEFB" }}>
                    <Typography
                      fontSize={12}
                      sx={{ color: "#0F5EDD" }}
                      variant="body2"
                    >
                      {car.lease}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ color: "#5F5F5F" }}>
                  {car.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Box
                    component="img"
                    alt="logo"
                    src={car.logo}
                    width="32px"
                    height="32px"
                    mr={2}
                  />
                  <Typography variant="body2">
                    {car.description_logo}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CarListingCard;
