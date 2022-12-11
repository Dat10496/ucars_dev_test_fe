import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FEATURES_VEHICLE } from "../../utils/DataSeed";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const styles = {
  styleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

function BodyFooter() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(3);
  const [backBtn, setBackBtn] = useState(false);
  const [fwdBtn, setFwdBtn] = useState(false);

  const handleFwd = () => {
    setFirstNum(firstNum + 1);
    setSecondNum(secondNum + 1);
  };

  const handleBack = () => {
    setFirstNum(firstNum - 1);
    setSecondNum(secondNum - 1);
  };

  useEffect(() => {
    if (firstNum === 0) {
      setBackBtn(true);
      setFwdBtn(false);
    } else if (secondNum === 6) {
      setFirstNum(0);
      setSecondNum(3);
    } else {
      setBackBtn(false);
      setFwdBtn(false);
    }
  }, [firstNum, secondNum]);

  // ------------------- @media-query------------------
  const [firstNumSlice, setFirstNumSlice] = useState(0);
  const [secondNumSlice, setSecondNumSlice] = useState(1);

  const handleChangeVehicle = () => {
    setFirstNumSlice(firstNumSlice + 1);
    setSecondNumSlice(secondNumSlice + 1);
  };

  useEffect(() => {
    if (secondNumSlice === 5) {
      setFirstNumSlice(0);
      setSecondNumSlice(1);
    }
  }, [firstNumSlice, secondNumSlice]);
  //--------------------------------------------

  return (
    <Box sx={{ height: 600 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: { sm: "space-between", xs: "center" },
          alignItems: "center",
          p: { sm: 8, xs: 3 },
        }}
      >
        <Box sx={{ width: { sm: 450, xs: 375, textAlign: "center" } }}>
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
          <Button
            sx={{ height: 30, display: { sm: "block", xs: "none" } }}
            color="error"
            variant="contained"
          >
            View More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button disabled={backBtn} onClick={handleBack}>
          <ArrowBackIosIcon />
        </Button>

        {FEATURES_VEHICLE.slice(firstNum, secondNum).map((vehicle) => (
          <Box key={vehicle.id}>
            {vehicle.brand && (
              <Box key={vehicle.id} width={415} height={361} p={2}>
                <Box
                  component="img"
                  src={vehicle.image}
                  alt="img"
                  width={350}
                  height={200}
                />

                <Box
                  sx={{
                    justifyContent: "space-between",
                    width: 350,
                    height: 80,
                    mt: 4,
                  }}
                >
                  <Box sx={styles.styleBox}>
                    <Typography variant="h5" fontWeight={500}>
                      {vehicle.brand}
                    </Typography>
                    <Typography variant="subtitle2">Duplex</Typography>
                  </Box>

                  <Box sx={styles.styleBox}>
                    <Typography
                      variant="subtitle2"
                      color="#5F5F5F"
                      fontWeight={400}
                    >
                      Lekki,phase 2
                    </Typography>
                    <Typography
                      fontWeight={700}
                      variant="subtitle2"
                      color="#EE1B24"
                    >
                      {vehicle.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
            {vehicle.imageAdvertise && (
              <Box
                key={vehicle.id}
                component="img"
                src={vehicle.imageAdvertise}
                alt="imgAd"
                width={281}
                height={290}
                mb={5}
              />
            )}
          </Box>
        ))}

        <Button disabled={fwdBtn} onClick={handleFwd}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      {/*----------------- media-query ---------------- */}
      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {FEATURES_VEHICLE.slice(firstNumSlice, secondNumSlice).map(
          (vehicle) => (
            <Box key={vehicle.id}>
              {vehicle.brand && (
                <Box key={vehicle.id} width={375} height={361} p={2}>
                  <Box
                    component="img"
                    src={vehicle.image}
                    alt="img"
                    width={350}
                    height={200}
                  />

                  <Box
                    sx={{
                      justifyContent: "space-between",
                      width: 350,
                      height: 80,
                      mt: 4,
                    }}
                  >
                    <Box sx={styles.styleBox}>
                      <Typography variant="h5" fontWeight={500}>
                        {vehicle.brand}
                      </Typography>
                      <Typography variant="subtitle2">Duplex</Typography>
                    </Box>

                    <Box sx={styles.styleBox}>
                      <Typography
                        variant="subtitle2"
                        color="#5F5F5F"
                        fontWeight={400}
                      >
                        Lekki,phase 2
                      </Typography>
                      <Typography
                        fontWeight={700}
                        variant="subtitle2"
                        color="#EE1B24"
                      >
                        {vehicle.price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
              {vehicle.imageAdvertise && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 361,
                  }}
                >
                  <Box
                    key={vehicle.id}
                    component="img"
                    src={vehicle.imageAdvertise}
                    alt="imgAd"
                    width={281}
                    height={290}
                  />
                </Box>
              )}
            </Box>
          )
        )}
      </Box>
      {/* ------------------------------------------------ */}

      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            height: 30,
          }}
          color="error"
          variant="contained"
          onClick={handleChangeVehicle}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
}

export default BodyFooter;
