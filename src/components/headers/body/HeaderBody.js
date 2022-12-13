import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../Logo";

const styleTypo = {
  "&: hover": {
    cursor: "pointer",
  },
};

function HeaderBody() {
  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "none" },
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#232323",
        height: 77,
      }}
    >
      <Logo sx={{ width: 148, height: 40 }} />

      <Stack color="#FFFFFF" direction="row" spacing={3}>
        <Typography
          sx={styleTypo}
          fontSize={16}
          fontWeight={500}
          fontFamily="Inter"
        >
          New Cars
        </Typography>

        <Typography
          sx={styleTypo}
          fontFamily="Inter"
          fontSize={16}
          fontWeight={500}
        >
          Used Cars
        </Typography>
        <Typography
          sx={styleTypo}
          fontFamily="Inter"
          fontSize={16}
          fontWeight={500}
        >
          Reviews
        </Typography>
        <Typography
          sx={styleTypo}
          fontFamily="Inter"
          fontSize={16}
          fontWeight={500}
        >
          News
        </Typography>
      </Stack>

      <Button
        component={RouterLink}
        to="/admin"
        sx={{ width: 179, height: 40 }}
        variant="contained"
        color="error"
      >
        Login
      </Button>
    </Box>
  );
}

export default HeaderBody;
