import { Box, Button } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MainHeaderAdmin() {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "flex-end",
        borderBottom: "1px solid #F1F1F1",
        height: 64,
        alignItems: "center",
        flexGrow: 1,
        width: "1026px",
      }}
    >
      <ErrorOutlineIcon fontSize="small" />
      <NotificationsNoneOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
      <Button sx={{ color: "#232323", display: "flex", alignItems: "center" }}>
        <CircleIcon sx={{ color: "#E3E3E3" }} />
        Admin
        <KeyboardArrowDownIcon />
      </Button>
    </Box>
  );
}

export default MainHeaderAdmin;
