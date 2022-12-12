import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import CarBuyerImg from "../../images/Carbuyer.png";
import FooterLogo from "../../images/footerlogo.png";

const styles = {
  styleBoxContact: {
    display: "flex",
    m: 1,
    mt: 2,
    width: { xs: 340, sm: 310 },
    alignItems: "center",
  },
  styleTypo: {
    display: { xs: "flex", sm: "block" },
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    mb: { xs: 2, sm: 0 },
  },
};

function BottomFooter() {
  // --- media-query ---
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [resources, setResources] = useState(false);
  const [legal, setLegal] = useState(false);

  const handleChangeAbout = () => {
    if (about) {
      setAbout(false);
    } else {
      setAbout(true);
    }
  };

  const handleChangeService = () => {
    if (service) {
      setService(false);
    } else {
      setService(true);
    }
  };

  const handleChangeResources = () => {
    if (resources) {
      setResources(false);
    } else {
      setResources(true);
    }
  };

  const handleChangeLegal = () => {
    if (legal) {
      setLegal(false);
    } else {
      setLegal(true);
    }
  };
  // -------------------
  return (
    <Box sx={{ maxHeight: { sm: 360, xs: 1000 } }}>
      <Stack
        sx={{ alignItems: { sm: "center" } }}
        direction={{ sm: "row", xs: "column" }}
        spacing={5}
      >
        <Box p={2}>
          <Box
            component="img"
            src={CarBuyerImg}
            sx={{
              height: { xs: 40, sm: "" },
            }}
          />

          <Box sx={styles.styleBoxContact}>
            <PinDropIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography variant="subtitle2" ml={1} fontSize={12}>
                71 Ayer Rajah Crescent, #06-14, Singapore 139951
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <PhoneEnabledIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography variant="subtitle2" ml={1} fontSize={12}>
                +65 8808 7905
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <EmailIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography variant="subtitle2" ml={1} fontSize={12}>
                hello@carbuyer.com.sg
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { sm: "flex", xs: "none" },
            justifyContent: "space-between",
            width: 380,
          }}
        >
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
        </Box>

        {/*------------- media-query-------------------------------------- */}
        <Box sx={{ display: { sm: "none", xs: "block" }, p: { sm: 0, xs: 1 } }}>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 2,
              pb: 2,
            }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              About Us
            </Typography>
            {about ? (
              <KeyboardArrowUpIcon onClick={handleChangeAbout} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleChangeAbout} />
            )}
          </Box>

          {about && (
            <Box color="#5F5F5F" mb={1}>
              <Stack spacing={1} mt={1}>
                <Typography variant="body2">About Us</Typography>
                <Typography variant="body2">Contact Us</Typography>
                <Typography variant="body2">Careers</Typography>
              </Stack>
            </Box>
          )}
          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 2,
              pb: 2,
            }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              Services
            </Typography>
            {service ? (
              <KeyboardArrowUpIcon onClick={handleChangeService} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleChangeService} />
            )}
          </Box>

          {service && (
            <Box color="#5F5F5F">
              <Stack spacing={1} mt={1} mb={1}>
                <Typography variant="body2">Buy Used Cars</Typography>
                <Typography variant="body2">Buy New Cars</Typography>
                <Typography variant="body2">Be a Dealer with UCARS</Typography>
              </Stack>
            </Box>
          )}
          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 2,
              pb: 2,
            }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              Resources
            </Typography>
            {resources ? (
              <KeyboardArrowUpIcon onClick={handleChangeResources} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleChangeResources} />
            )}
          </Box>

          {resources && (
            <Box color="#5F5F5F">
              <Stack spacing={1} mt={1} mb={1}>
                <Typography variant="body2">News</Typography>
                <Typography variant="body2">Sell My Car</Typography>
                <Typography variant="body2">COE Prices</Typography>
              </Stack>
            </Box>
          )}
          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 2,
              pb: 2,
            }}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              Legal
            </Typography>
            {legal ? (
              <KeyboardArrowUpIcon onClick={handleChangeLegal} />
            ) : (
              <KeyboardArrowDownIcon onClick={handleChangeLegal} />
            )}
          </Box>
          {legal && (
            <Box color="#5F5F5F">
              <Stack spacing={1} mt={1} mb={1}>
                <Typography variant="body2">Legal</Typography>
              </Stack>
            </Box>
          )}

          <Divider />
        </Box>
        {/* ------------------------------------------------------ */}

        <Box
          sx={{
            width: { xs: 375 },
            display: { sm: "block", xs: "flex" },
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontSize={12} sx={{ display: "flex" }} variant="body2">
            Get the{" "}
            <Typography
              component="span"
              color="#EE1B24"
              ml={0.5}
              mr={0.5}
              variant="body2"
              fontSize={12}
            >
              {" "}
              latest
            </Typography>{" "}
            automotive news sent to your inbox!
          </Typography>

          <Box
            sx={{
              width: { xs: 345 },
            }}
            mt={1}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter your email"
            />
            <Button color="error" variant="contained">
              Subscribe
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              mt: { sm: 2, xs: 3 },
              ml: { sm: 0, xs: 1 },
              width: { xs: 320 },
            }}
          >
            <Typography variant="body2">Follow us</Typography>

            <Stack
              mr={{ xs: 4, sm: 0 }}
              ml={{ sm: 1, xs: 2 }}
              spacing={1}
              direction="row"
            >
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
          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <Typography variant="subtitle2">
              Advertising Terms and Conditions Platform Terms and Conditions
              Privacy Policy
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1.5,
              justifyContent: { xs: "flex-start", sm: "" },
            }}
            component="div"
          >
            <Box component="img" src={FooterLogo} />

            <Box
              sx={{
                display: "flex",
                width: { xs: 276, sm: 500 },
                height: { xs: 40, sm: 20 },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              <Typography
                ml={1}
                color="#5F5F5F"
                fontSize={11}
                variant="subtitle2"
              >
                CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                owned by UCARS Pte Ltd
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: { sm: "block", xs: "none" } }}>
          <Typography fontSize={12} variant="subtitle1" color="#8C8C8C">
            © 2022. All rights reserved.
          </Typography>
        </Box>
      </Box>

      {/* --- media-query------- */}
      <Box
        sx={{
          display: {
            sm: "none",
            xs: "flex",
          },
          backgroundColor: "#232323",
          color: "#FFFF",
          height: 55,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={12} variant="subtitle1">
          © 2022. All rights reserved.
        </Typography>
      </Box>
      {/* ----------------------- */}
    </Box>
  );
}

export default BottomFooter;
