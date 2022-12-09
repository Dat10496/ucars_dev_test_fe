import React from "react";
import { Box, Button, Stack } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuAdmin from "../components/MenuAdmin";
import BodyAdmin from "../components/BodyAdmin";

function AdminPage() {
  return (
    <Stack sx={{ justifyContent: "space-between" }} direction="row">
      <Box sx={{ width: 240 }} name="menu">
        <MenuAdmin />
      </Box>

      <Box width={1126} name="page">
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            borderBottom: "1px solid #F1F1F1",
          }}
        >
          <ErrorOutlineIcon fontSize="small" />
          <NotificationsNoneOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
          <Button
            sx={{ color: "#232323", display: "flex", alignItems: "center" }}
          >
            <CircleIcon sx={{ color: "#E3E3E3" }} />
            Admin
            <KeyboardArrowDownIcon />
          </Button>
        </Box>

        <BodyAdmin />
      </Box>
    </Stack>
  );
}

export default AdminPage;
