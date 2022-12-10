import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link as RouterLink } from "react-router-dom";
import AdjustRoundedIcon from "@mui/icons-material/AdjustRounded";

import logoImg from "../images/footerlogo.png";

function AdminBrandDetail() {
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

        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E3E3E3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            mb: 3,
            position: "relative",
            left: 20,
            top: 10,
          }}
        >
          <Box component="img" alt="logo" src={logoImg} />
        </Box>
      </Box>

      <Box sx={{ color: "#8C8C8C", width: 552, p: 3 }}>
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
            <Typography mb={0.5} variant="subtitle2" fontWeight={400}>
              Brand Name
            </Typography>
            <Typography fontWeight={600} color="#232323" variant="subtitle1">
              UCARS PTE LTD
            </Typography>
          </Box>

          <Box ml={5}>
            <Typography variant="subtitle2" fontWeight={400}>
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
            >
              <AdjustRoundedIcon />
              <Typography variant="subtitle2">Active</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",

            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2" fontWeight={400}>
            Brand Description
          </Typography>
          <Typography fontWeight={600} color="#232323" variant="subtitle2">
            Ucars brand description
          </Typography>
        </Box>
      </Box>

      <Box sx={{ pl: 3, mt: 1 }}>
        <Button
          component={RouterLink}
          to="/admin/edit"
          size="small"
          variant="contained"
        >
          Edit Information
        </Button>
      </Box>
    </Stack>
  );
}

export default AdminBrandDetail;
