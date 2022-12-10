import {
  Box,
  Button,
  Divider,
  Modal,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link as RouterLink } from "react-router-dom";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logoImg from "../images/footerlogo.png";

const styles = {
  styleBox: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    border: "1px solid #E3E3E3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "relative",
    left: 20,
    top: 10,
  },
  styleBoxLogo: {
    width: 100,
    height: 100,
    color: "#FFFFFF",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
};

function AdminBrandEdit() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverLogo, setPopoverLogo] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setPopoverLogo(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverLogo(null);
  };
  return (
    <Stack>
      <Box>
        <Box
          sx={{ color: "#2F465F", display: "flex", alignItems: "center", p: 1 }}
        >
          <Button
            sx={{ color: "#2F465F", ml: -1 }}
            size="small"
            component={RouterLink}
            to="/admin"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Button>
          <Typography variant="h6" fontWeight={600}>
            Brand Details
          </Typography>
        </Box>
      </Box>

      <Box sx={{ pl: 2, width: 552, p: 2 }}>
        <Typography mb={1} variant="subtitle2" fontWeight={600}>
          Brand Logo
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box onMouseEnter={handlePopoverOpen} sx={styles.styleBox}>
          <Box component="img" alt="logo" src={logoImg} />
        </Box>
        <Modal
          sx={{
            position: "absolute",
            left: "22%",
            top: "30%",
            width: 100,
            height: 100,
            color: "#FFFFFF",
            backgroundColor: "#8C8C8C",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          open={Boolean(popoverLogo)}
          onClose={handlePopoverClose}
        >
          <Box onClick={handlePopoverClose} sx={styles.styleBoxLogo}>
            CHANGE
            <Box component="div">LOGO</Box>
          </Box>
        </Modal>
      </Box>

      <Box sx={{ color: "#232323", width: 552, p: 3 }}>
        <Typography mb={1} variant="subtitle2" color="#232323" fontWeight={600}>
          Brand Details
        </Typography>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mt: 2,
          }}
        >
          <Box width={240} mr={2}>
            <Typography
              color="#8C8C8C"
              mb={0.5}
              variant="subtitle2"
              fontWeight={400}
            >
              Brand Name
            </Typography>
            <TextField size="small" placeholder="UCARS PTE LTD" />
          </Box>

          <Box ml={5}>
            <Typography color="#8C8C8C" variant="subtitle2" fontWeight={400}>
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
              <AdjustRoundedIcon />
              <Typography variant="subtitle2">Active</Typography>
              <KeyboardArrowDownIcon sx={{ color: "#232323" }} />
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
                  p: 0.5,
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
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography color="#8C8C8C" variant="subtitle2" fontWeight={400}>
            Brand Description
          </Typography>
          <TextField
            multiline
            sx={{ width: 540 }}
            rows={2}
            placeholder="Ucars brand description"
          />
        </Box>
      </Box>

      <Box sx={{ pl: 3 }}>
        <Button size="small" variant="contained">
          Save Changes
        </Button>
      </Box>
    </Stack>
  );
}

export default AdminBrandEdit;
