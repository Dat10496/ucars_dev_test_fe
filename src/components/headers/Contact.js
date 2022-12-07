import React from "react";
import { Box, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Contact() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Box name="contact" sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", borderRight: "1px solid #E3E3E3" }}>
          <PinDropIcon />

          <Box sx={{ ml: 2, width: 287, height: 40 }}>
            <Typography variant="body2">
              71 Ayer Rajah Crescent, #06-14,
            </Typography>
            <Typography variant="body2">Singapore 139951</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", ml: 2 }}>
          <EmailIcon />

          <Box sx={{ ml: 2, width: 287, height: 40 }}>
            <Typography variant="body2">Email us at:</Typography>
            <Typography variant="body2"> hello@carbuyer.com.sg</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", mr: 3 }} name="phone">
        <LocalPhoneIcon />

        <Box ml={1}>
          <Typography fontWeight={500} variant="body1">
            +65 8808 7905
          </Typography>
          <Typography fontWeight={500} variant="body1">
            +7 (700) 51 51 518
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
