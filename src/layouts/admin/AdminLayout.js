import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import MenuAdmin from "./MenuAdmin";
import MainHeaderAdmin from "./MainHeaderAdmin";

function AdminLayout() {
  return (
    <Stack
      sx={{ minHeight: "100vh", justifyContent: "space-between" }}
      direction="row"
    >
      <MenuAdmin />
      <Box>
        <MainHeaderAdmin />
        <Outlet />
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Stack>
  );
}

export default AdminLayout;
