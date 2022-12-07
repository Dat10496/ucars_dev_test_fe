import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import CarBuyerImg from "../../images/Carbuyer.png";
import FooterLogo from "../../images/footerlogo.png";

const styles = {
  styleBoxContact: {
    display: "flex",
    alignItems: "center",
    m: 1,
  },
};

function BottomFooter() {
  return (
    <Box sx={{ height: 360, p: 5 }}>
      <Stack sx={{ alignItems: "center" }} direction="row" spacing={5}>
        <Box p={2}>
          <Box component="img" src={CarBuyerImg} />

          <Box sx={styles.styleBoxContact}>
            <PinDropIcon fontSize="small" />
            <Typography variant="subtitle2" ml={1}>
              71 Ayer Rajah Crescent, #06-14, Singapore 139951
            </Typography>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <PhoneEnabledIcon fontSize="small" />
            <Typography variant="subtitle2" ml={1}>
              +65 8808 7905
            </Typography>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <EmailIcon fontSize="small" />
            <Typography variant="subtitle2" ml={1}>
              hello@carbuyer.com.sg
            </Typography>
          </Box>
        </Box>

        <Box color="#5F5F5F">
          <Typography
            sx={{ color: "#232323", fontWeight: 600 }}
            variant="subtitle1"
          >
            About
          </Typography>
          <Stack spacing={1} mt={1}>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Contact Us</Typography>
            <Typography variant="body2">Careers</Typography>
          </Stack>
        </Box>

        <Box color="#5F5F5F">
          <Typography
            sx={{ color: "#232323", fontWeight: 600 }}
            variant="subtitle1"
          >
            Services
          </Typography>
          <Stack spacing={1} mt={1}>
            <Typography variant="body2">Buy Used Cars</Typography>
            <Typography variant="body2">Buy New Cars</Typography>
            <Typography variant="body2">Be a Dealer with UCARS</Typography>
          </Stack>
        </Box>

        <Box color="#5F5F5F">
          <Typography
            sx={{ color: "#232323", fontWeight: 600 }}
            variant="subtitle1"
          >
            Resources
          </Typography>
          <Stack spacing={1} mt={1}>
            <Typography variant="body2">News</Typography>
            <Typography variant="body2">Sell My Car</Typography>
            <Typography variant="body2">COE Prices</Typography>
          </Stack>
        </Box>

        <Box>
          <Typography sx={{ display: "flex" }} variant="body2">
            Get the{" "}
            <Typography color="#EE1B24" ml={0.5} mr={0.5} variant="body2">
              {" "}
              latest
            </Typography>{" "}
            automotive news sent to your inbox!
          </Typography>

          <Box mt={1}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter your email"
            />
            <Button color="error" variant="contained">
              Subscribe
            </Button>
          </Box>

          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography variant="body2">Follow us</Typography>

            <Stack ml={1} spacing={2} direction="row">
              <InstagramIcon size="small" />
              <FacebookOutlinedIcon size="small" />
              <SendIcon size="small" />
              <LinkedInIcon size="small" />
              <YouTubeIcon size="small" />
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        sx={{
          borderTop: "1px solid #FAFAFA",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="subtitle2">
            Advertising Terms and Conditions Platform Terms and Conditions
            Privacy Policy
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", mt: 1.5 }}
            component="div"
          >
            <Box component="img" src={FooterLogo} />
            <Typography
              color="#5F5F5F"
              fontSize={12}
              ml={1}
              variant="subtitle2"
            >
              CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned
              by UCARS Pte Ltd
            </Typography>
          </Box>
        </Box>

        <Box>
          {" "}
          <Typography fontSize={12} variant="subtitle1" color="#8C8C8C">
            © 2022. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomFooter;
