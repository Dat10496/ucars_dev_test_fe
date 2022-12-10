import {
  Box,
  Button,
  Divider,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

function AddBrand({ handleModalClose }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          backgroundColor: "#FAFAFA",
          height: 82,
        }}
      >
        <Box>
          <Typography fontWeight={600} variant="subtitle1">
            Add Car Brand
          </Typography>
          <Typography variant="subtitle2" color="#5F5F5F" fontWeight={400}>
            Setup new car brand
          </Typography>
        </Box>

        <Button onClick={handleModalClose} sx={{ color: "#232323" }}>
          <CancelOutlinedIcon sx={{ color: "#E3E3E3" }} />
        </Button>
      </Box>
      <Divider />

      <Box mt={2} p={2} height={48}>
        <Typography variant="subtitle1" fontWeight={600}>
          Brand Logo
        </Typography>
      </Box>
      <Divider variant="middle" />

      <Box p={2}>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#E3E3E3",
            border: "1px solid #E3E3E3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 20,
            mb: 3,
          }}
        >
          <Typography>+</Typography>
          <Typography variant="subtitle1" color="#8C8C8C">
            Brand Logo
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={600}>
          Brand Details
        </Typography>
      </Box>
      <Divider variant="middle" />

      <Box sx={{ color: "#8C8C8C" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", p: 2 }}>
          <Box>
            <Typography mb={0.5} variant="subtitle1">
              Brand Name
            </Typography>
            <TextField size="small" placeholder="Input Content" />
          </Box>

          <Box ml={5}>
            <Typography variant="subtitle1">Brand Status</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "&: hover": {
                  cursor: "pointer",
                },
                mt: 1,
                backgroundColor: "#CEF7E2",
                color: "#1F7B4D ",
                width: 131,
                height: 34,
                borderRadius: 5,
                justifyContent: "space-evenly",
              }}
              onClick={handleClick}
            >
              <AdjustRoundedIcon />
              <Typography variant="subtitle2">Active</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box
                sx={{
                  width: 150,
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&: hover": {
                      cursor: "pointer",
                    },
                    mt: 1,
                    backgroundColor: "#CEF7E2",
                    color: "#1F7B4D ",
                    width: 120,
                    height: 34,
                    borderRadius: 5,
                    justifyContent: "space-evenly",
                  }}
                >
                  <AdjustRoundedIcon />
                  <Typography variant="subtitle2">Active</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&: hover": {
                      cursor: "pointer",
                    },
                    mt: 1,
                    backgroundColor: "#FAFAFA",
                    color: "#5F5F5F ",
                    width: 131,
                    height: 34,
                    borderRadius: 5,
                    justifyContent: "space-evenly",
                  }}
                >
                  <AdjustRoundedIcon />
                  <Typography variant="subtitle2">Inactive</Typography>
                </Box>
              </Box>
            </Popover>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            flexDirection: "column",
            mt: -2,
          }}
        >
          <Typography variant="subtitle1">Brand Description</Typography>
          <TextField
            multiline
            sx={{ width: 552 }}
            rows={2}
            placeholder="Input Content"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: 570,
            mt: -1,
          }}
        >
          <Button
            sx={{ color: "#232323", mr: 2 }}
            variant="outlined"
            color="inherit"
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button variant="contained">Create Brand</Button>
        </Box>
      </Box>
    </>
  );
}

export default AddBrand;
