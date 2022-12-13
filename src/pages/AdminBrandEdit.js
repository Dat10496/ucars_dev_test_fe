import {
  Box,
  Button,
  Divider,
  Modal,
  Popover,
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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
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
    <Box>
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
          <Typography fontSize={24} fontWeight={600}>
            Brand Details
          </Typography>
        </Box>
      </Box>

      <Box sx={{ pl: 2, width: 552, p: 2 }}>
        <Typography mb={1} fontSize={14} fontWeight={600}>
          Brand Logo
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box onMouseEnter={handlePopoverOpen} sx={styles.styleBox}>
          <Box component="img" alt="logo" src={logoImg} />
        </Box>
        <Modal
          sx={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            left: "23.5%",
            top: "31%",
            backgroundColor: "#5F5F5F",
          }}
          open={Boolean(popoverLogo)}
          onClose={handlePopoverClose}
        >
          <Box onClick={handlePopoverClose} sx={styles.styleBoxLogo}>
            <Typography fontWeight={600} fontSize={16}>
              CHANGE LOGO
            </Typography>
          </Box>
        </Modal>
      </Box>

      <Box sx={{ color: "#232323", width: 552, p: 3 }}>
        <Typography mb={1} fontSize={14} color="#232323" fontWeight={600}>
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
            <Typography color="#8C8C8C" mb={0.5} fontSize={14} fontWeight={400}>
              Brand Name
            </Typography>
            <TextField size="small" placeholder="UCARS PTE LTD" />
          </Box>

          <Box ml={5}>
            <Typography color="#8C8C8C" fontSize={14} fontWeight={400}>
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
                width: 131,
                height: 34,
                borderRadius: 5,
                justifyContent: "space-evenly",
              }}
              onClick={handleClick}
            >
              <AdjustRoundedIcon fontSize="small" />
              <Typography fontWeight={500} fontSize={16}>
                Active
              </Typography>
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
                  height: 104,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: 5,
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
          <Typography color="#8C8C8C" fontSize={14} fontWeight={400}>
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

      <Box sx={{ pl: 3, mb: 3 }}>
        <Button
          sx={{ width: 135, height: 40 }}
          size="small"
          variant="contained"
          color="primary"
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default AdminBrandEdit;
