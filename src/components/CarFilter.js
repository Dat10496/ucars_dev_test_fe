import { React, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
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
import { FILTER_CAR, VEHICLE_TYPES } from "../utils/LabelFilter";

const styles = {
  styleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#5F5F5F",
    mt: { sm: 0, xs: 3 },
  },
};

function CarFilter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rangePrice, setRangePrice] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

  const handleClickCar = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCar = (value) => {
    setAnchorEl(null);
  };

  const handleClickPrice = (event) => {
    setRangePrice(event.currentTarget);
  };
  const handleClosePrice = (value) => {
    setRangePrice(null);
  };

  const handleClickVehicleType = (event) => {
    setVehicleType(event.currentTarget);
  };
  const handleCloseVehicleType = (value) => {
    setVehicleType(null);
  };
  return (
    <>
      <Box
        sx={{
          display: { sm: "flex", xs: "block" },
          justifyContent: "space-evenly",
          width: { sm: 1200, xs: 333 },
          height: { xs: 440, sm: 139 },
          alignItems: "center",
          p: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            width: { sm: 200, xs: 333 },
            height: { xs: 120, sm: 50 },
            borderRight: { sm: "1px solid #F1F1F1", xs: "none" },
            borderBottom: { xs: "1px solid #F1F1F1", sm: "none" },
          }}
        >
          <Typography variant="subtitle2">New/ Used</Typography>

          <Box sx={styles.styleBox}>
            <Typography fontWeight={400} variant="subtitle2">
              New Cars
            </Typography>
            <Button sx={{ color: "#212121" }} p={0} onClick={handleClickCar}>
              {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>

            <Menu
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
              <MenuItem>
                <FormControl>
                  <RadioGroup>
                    {FILTER_CAR.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            width: { sm: 300, xs: 333 },
            height: { xs: 120, sm: 50 },
            borderRight: { sm: "1px solid #F1F1F1", xs: "none" },
            borderBottom: { xs: "1px solid #F1F1F1", sm: "none" },
          }}
        >
          <Typography sx={{ mt: { xs: 2, sm: 0 } }} variant="subtitle2">
            Price Range
          </Typography>

          <Box sx={styles.styleBox}>
            <Typography
              variant="subtitle2"
              fontWeight={400}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MonetizationOnOutlinedIcon fontSize="small" /> $10,0000 -{" "}
              <MonetizationOnOutlinedIcon fontSize="small" /> $100,0000
            </Typography>

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
              <Typography variant="subtitle2" sx={{ p: 2 }}>
                Price Range
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{ width: 160 }}
                  label="Min"
                  defaultValue="S$ 20,000"
                />
                {" - "}
                <TextField
                  sx={{ width: 160 }}
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
                }}
              >
                <Button sx={{ color: "#B4B4B4", ml: 1 }}>Clear</Button>
                <Button sx={{ mr: 1 }} variant="contained" color="error">
                  Save
                </Button>
              </Box>
            </Stack>
          </Popover>
        </Box>

        <Box
          sx={{
            width: { sm: 200, xs: 333 },
            height: { xs: 120, sm: 50 },
            borderRight: { sm: "1px solid #F1F1F1" },
          }}
        >
          <Typography variant="subtitle2" sx={{ mt: { xs: 2, sm: 0 } }}>
            Vehicle Type
          </Typography>

          <Box sx={styles.styleBox}>
            <Typography variant="subtitle2" fontWeight={400}>
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
            <Stack sx={{ width: 550, height: 420 }}>
              <Typography>Vehicle Type</Typography>
              <Grid ml={2} container>
                {VEHICLE_TYPES.map((type) => (
                  <Grid key={type.value} item md={4}>
                    <Box component="div" sx={{ width: 170, height: 50 }}>
                      <FormGroup key={type.value}>
                        <FormControlLabel
                          value={type.value}
                          control={<Checkbox />}
                          label={type.label}
                        />
                      </FormGroup>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ mt: 3, mb: 2 }} variant="middle" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Button sx={{ color: "#B4B4B4", ml: 1 }}>Clear</Button>
                <Button sx={{ mr: 1 }} variant="contained" color="error">
                  Save
                </Button>
              </Box>
            </Stack>
          </Popover>
        </Box>

        <Box
          sx={{
            position: {
              xs: "relative",
              sm: "block",
            },
            right: { xs: 15, sm: 0 },
            bottom: { xs: 15, sm: 0 },
          }}
        >
          <Button
            sx={{ height: 60, width: { sm: 140, xs: 333 } }}
            variant="contained"
            color="error"
          >
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CarFilter;
