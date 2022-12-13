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
          <Typography fontWeight={600} fontSize={16}>
            Add Car Brand
          </Typography>
          <Typography fontSize={14} color="#5F5F5F" fontWeight={400}>
            Setup new car brand
          </Typography>
        </Box>

        <Button onClick={handleModalClose} sx={{ color: "#232323" }}>
          <CancelOutlinedIcon color="second" />
        </Button>
      </Box>
      <Divider />

      <Box mt={2} p={2} height={48}>
        <Typography fontSize={14} fontWeight={600}>
          Brand Logo
        </Typography>
      </Box>
      <Divider variant="middle" />

      <Box p={2}>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#FAFAFA",
            border: "1px dashed  #E3E3E3",
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

          <Typography fontWeight={500} fontSize={12} color="#8C8C8C">
            Brand Logo
          </Typography>
        </Box>

        <Typography fontSize={14} fontWeight={600}>
          Brand Details
        </Typography>
      </Box>
      <Divider variant="middle" />

      <Box sx={{ color: "#8C8C8C" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", p: 2 }}>
          <Box>
            <Typography mb={0.5} fontSize={14} fontWeight={400}>
              Brand Name
            </Typography>
            <TextField size="small" placeholder="Input Content" />
          </Box>

          <Box ml={5}>
            <Typography fontSize={14} fontWeight={400}>
              Brand Status
            </Typography>
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
                width: 99,
                height: 34,
                borderRadius: 5,
                justifyContent: "space-evenly",
              }}
              onClick={handleClick}
            >
              <AdjustRoundedIcon fontSize="small" />
              <Typography variant="subtitle2">Active</Typography>
              <KeyboardArrowDownIcon color="second" />
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
                  height: 104,
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
          <Typography fontSize={14} fontWeight={400}>
            Brand Description
          </Typography>
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
          }}
        >
          <Button
            sx={{
              color: "#232323",
              mr: 2,
              border: "0.5px solid #B4B4B4",
              width: 83,
              height: 40,
            }}
            color="inherit"
            onClick={handleModalClose}
          >
            <Typography fontWeight={500} fontSize={14}>
              Cancel
            </Typography>
          </Button>
          <Button
            sx={{ width: 137, height: 40 }}
            variant="contained"
            color="primary"
            onClick={handleModalClose}
          >
            <Typography fontWeight={500} fontSize={14}>
              Create Brand
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AddBrand;
