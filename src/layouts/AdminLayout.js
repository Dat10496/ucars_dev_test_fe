import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, Box } from "@mui/material";

function AdminLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default AdminLayout;
