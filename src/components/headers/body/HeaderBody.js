import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Logo";

function HeaderBody() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#232323",
        height: 80,
      }}
    >
      <Logo sx={{ width: 150, height: 50 }} />

      <Stack color="#FFFFFF" direction="row" spacing={3}>
        <Typography>New Cars</Typography>
        <Typography>Used Cars</Typography>
        <Typography>Reviews</Typography>
        <Typography>News</Typography>
      </Stack>

      <Button sx={{ width: 150 }} variant="contained" color="error">
        Login
      </Button>
    </Box>
  );
}

export default HeaderBody;
