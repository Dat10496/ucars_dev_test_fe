import { React, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Popover,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { FILTER_CAR, VEHICLE_TYPES } from "../utils/DataSeed";

const styles = {
  styleBoxInside: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#5F5F5F",
    mt: { sm: 0, xs: 3 },
  },
  styleBoxOutside: {
    width: { sm: 211, xs: 300 },
    height: { xs: 120, sm: 89 },
    borderRight: { sm: "1px solid #F1F1F1", xs: "none" },
    borderBottom: { sm: "none", xs: "1px solid #F1F1F1" },
    display: { sm: "flex", xs: "block" },
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

function CarFilter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rangePrice, setRangePrice] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

  const [valueCar, setValueCar] = useState("New Cars");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const handleClickCar = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCar = (option) => {
    setAnchorEl(null);
    if (!option.value) {
      setValueCar("New Cars");
    } else {
      setValueCar(option.value);
    }
  };

  const handleClickPrice = (event) => {
    setRangePrice(event.currentTarget);
  };
  const handleClosePrice = (event) => {
    setRangePrice(null);
  };

  const handleClickVehicleType = (event) => {
    setVehicleType(event.currentTarget);
  };
  const handleCloseVehicleType = (value) => {
    setVehicleType(null);
  };

  const handleGetPriceMin = (event) => {
    setPriceMin(event.currentTarget.value.replace("S$ ", ""));
  };
  const handleGetPriceMax = (event) => {
    setPriceMax(event.currentTarget.value.replace("S$ ", ""));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "space-evenly", xs: "space-between" },
          width: { sm: 1142, xs: 333 },
          height: { xs: 460, sm: 139 },
          alignItems: "center",
        }}
      >
        <Box sx={styles.styleBoxOutside}>
          <Typography fontWeight={500} fontSize={16}>
            New/ Used
          </Typography>

          <Box sx={styles.styleBoxInside}>
            <Typography fontWeight={400} fontSize={14}>
              {valueCar}
            </Typography>
            <Button sx={{ color: "#212121" }} p={0} onClick={handleClickCar}>
              {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>

            <Popover
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseCar}
            >
              <FormControl>
                <RadioGroup>
                  {FILTER_CAR.map((option) => (
                    <MenuItem key={option.value}>
                      <FormControlLabel
                        onClick={() => handleCloseCar(option)}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    </MenuItem>
                  ))}
                </RadioGroup>
              </FormControl>
            </Popover>
          </Box>
        </Box>

        <Box
          sx={{
            width: { sm: 333, xs: 303 },
            height: { xs: 120, sm: 89 },
            borderRight: { sm: "1px solid #F1F1F1", xs: "none" },
            display: { sm: "flex", xs: "block" },
            flexDirection: "column",
            justifyContent: "space-between",
            borderBottom: { xs: "1px solid #F1F1F1", sm: "none" },
          }}
        >
          <Typography
            sx={{ mt: { xs: 2, sm: 0 } }}
            fontWeight={500}
            fontSize={16}
          >
            Price Range
          </Typography>

          <Box sx={styles.styleBoxInside}>
            <Box
              sx={{
                width: 220,
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Typography
                sx={{ alignItems: "center", display: "flex" }}
                fontWeight={400}
                fontSize={14}
              >
                <MonetizationOnOutlinedIcon fontSize="small" />{" "}
                {priceMin ? priceMin : "$10,0000"}
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                -
              </Typography>
              <Typography
                sx={{ alignItems: "center", display: "flex" }}
                fontWeight={400}
                fontSize={14}
              >
                <MonetizationOnOutlinedIcon fontSize="small" />{" "}
                {priceMax ? priceMax : "$100,0000"}
              </Typography>
            </Box>

            <Button sx={{ color: "#212121" }} p={0} onClick={handleClickPrice}>
              {rangePrice ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>
          </Box>
          <Popover
            open={Boolean(rangePrice)}
            anchorEl={rangePrice}
            onClose={handleClosePrice}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Stack sx={{ width: 400, height: 220 }} spacing={2}>
              <Typography fontStyle={16} fontWeight={600} sx={{ p: 2 }}>
                Price Range
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: { sm: 400, xs: 320 },
                }}
              >
                <TextField
                  onChange={handleGetPriceMin}
                  sx={{ width: { sm: 160, xs: 120 } }}
                  label="Min"
                  defaultValue="S$ 20,000"
                />
                {" - "}
                <TextField
                  onChange={handleGetPriceMax}
                  sx={{ width: { sm: 160, xs: 120 } }}
                  label="Max"
                  defaultValue="S$ 500,000"
                />
              </Box>
              <Divider mt={2} variant="middle" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  width: { sm: 400, xs: 320 },
                }}
              >
                <Button
                  onClick={handleClosePrice}
                  sx={{ color: "#B4B4B4", ml: 1 }}
                >
                  <Typography fontSize={16} fontWeight={600}>
                    Clear
                  </Typography>
                </Button>
                <Button
                  onClick={handleClosePrice}
                  sx={{ mr: 1, width: 73, height: 40 }}
                  variant="contained"
                  color="error"
                >
                  Save
                </Button>
              </Box>
            </Stack>
          </Popover>
        </Box>

        <Box sx={styles.styleBoxOutside}>
          <Typography
            fontStyle={16}
            fontWeight={500}
            sx={{ mt: { xs: 2, sm: 0 } }}
          >
            Vehicle Type
          </Typography>

          <Box sx={styles.styleBoxInside}>
            <Typography fontWeight={400} fontSize={14}>
              +10 More
            </Typography>

            <Button
              sx={{ color: "#212121" }}
              p={0}
              onClick={handleClickVehicleType}
            >
              {vehicleType ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Button>
          </Box>

          <Popover
            open={Boolean(vehicleType)}
            anchorEl={vehicleType}
            onClose={handleCloseVehicleType}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Stack sx={{ width: { sm: 473, xs: 375 }, height: 350 }}>
              <Typography fontStyle={16} fontWeight={600} p={2}>
                Vehicle Type
              </Typography>
              <Grid ml={2} container>
                {VEHICLE_TYPES.map((type) => (
                  <Grid key={type.value} item md={4} xs={5}>
                    <FormGroup key={type.value}>
                      <FormControlLabel
                        value={type.value}
                        control={<Checkbox />}
                        label={
                          <Typography fontSize={12} fontWeight={400}>
                            {type.label}
                          </Typography>
                        }
                      />
                    </FormGroup>
                  </Grid>
                ))}
              </Grid>

              <Divider variant="middle" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  mt: { sm: 2, xs: 0 },
                  width: { xs: 320, sm: 473 },
                }}
              >
                <Button
                  onClick={handleCloseVehicleType}
                  sx={{ color: "#B4B4B4", ml: 1 }}
                >
                  <Typography fontSize={16} fontWeight={600}>
                    Clear
                  </Typography>
                </Button>
                <Button
                  onClick={handleCloseVehicleType}
                  sx={{ mr: 1, width: 73, height: 40 }}
                  variant="contained"
                  color="error"
                >
                  Save
                </Button>
              </Box>
            </Stack>
          </Popover>
        </Box>

        <Button
          sx={{ height: 60, width: { sm: 140, xs: 333 } }}
          variant="contained"
          color="error"
        >
          Search
        </Button>
      </Box>
    </>
  );
}

export default CarFilter;
