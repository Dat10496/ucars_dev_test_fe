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
    mt: 1,
    width: { xs: 340, sm: 310 },
    alignItems: "center",
    pl: { xs: 1, sm: 0 },
  },
  styleTypo: {
    display: { xs: "flex", sm: "block" },
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    mb: { xs: 2, sm: 0 },
  },
  styleStack: {
    "&: hover": {
      cursor: "pointer",
    },
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
    <Box
      sx={{
        maxHeight: { sm: 360, xs: 1500 },
        display: { sm: "flex" },
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Box
        sx={{
          alignItems: { sm: "center" },
          display: { xs: "block", sm: "flex" },
          width: { sm: 1185 },
          height: { sm: 220 },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: { sm: 25, xs: 0 },
          }}
        >
          <Box
            width={{ sm: 299, xs: 158 }}
            height={{ sm: 62, xs: 48 }}
            p={{ xs: 1, sm: 0 }}
          >
            <Box component="img" src={CarBuyerImg} width="100%" />
          </Box>

          <Box sx={styles.styleBoxContact}>
            <PinDropIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography fontWeight={400} ml={1} fontSize={12} color="#232323">
                71 Ayer Rajah Crescent, #06-14, Singapore 139951
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <PhoneEnabledIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography fontWeight={400} ml={1} fontSize={12} color="#232323">
                +65 8808 7905
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.styleBoxContact}>
            <EmailIcon fontSize="small" />

            <Box sx={styles.styleTypo}>
              <Typography fontWeight={400} ml={1} fontSize={12} color="#232323">
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
              sx={{
                color: "#232323",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              About
            </Typography>
            <Stack sx={styles.styleStack} spacing={1} mt={1}>
              <Typography fontWeight={400} fontSize={14}>
                About Us
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                Contact Us
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                Careers
              </Typography>
            </Stack>
          </Box>

          <Box color="#5F5F5F">
            <Typography
              sx={{ color: "#232323", fontWeight: 600, fontSize: 16 }}
            >
              Services
            </Typography>
            <Stack sx={styles.styleStack} spacing={1} mt={1}>
              <Typography fontWeight={400} fontSize={14}>
                Buy Used Cars
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                Buy New Cars
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                Be a Dealer with UCARS
              </Typography>
            </Stack>
          </Box>

          <Box color="#5F5F5F">
            <Typography
              sx={{ color: "#232323", fontWeight: 600, fontSize: 16 }}
            >
              Resources
            </Typography>
            <Stack sx={styles.styleStack} spacing={1} mt={1}>
              <Typography fontWeight={400} fontSize={14}>
                News
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                Sell My Car
              </Typography>
              <Typography fontWeight={400} fontSize={14}>
                COE Prices
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/*------------- media-query-------------------------------------- */}
        <Box
          sx={{
            display: { sm: "none", xs: "block" },
            p: { sm: 0, xs: 1 },
          }}
        >
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
        {/* -------------------------------------------------------------- */}

        <Box
          sx={{
            width: { xs: 375 },
            display: { sm: "block", xs: "flex" },
            flexDirection: "column",
            alignItems: { sm: "center", xs: "flex-start" },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            fontWeight={400}
            fontSize={{ sm: 14, xs: 12 }}
            sx={{ display: "flex", pl: { sm: 0, xs: 1 } }}
          >
            Get the{" "}
            <Typography
              component="span"
              color="#EE1B24"
              ml={0.5}
              mr={0.5}
              fontWeight={400}
              fontSize={{ sm: 14, xs: 12 }}
            >
              {" "}
              latest
            </Typography>{" "}
            automotive news sent to your inbox!
          </Typography>

          <Box
            sx={{
              width: { xs: 370 },
              pl: { sm: 0, xs: 1 },
            }}
            mt={1}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter your email"
              sx={{ width: { sm: 253, xs: 256 }, height: { sm: 38, xs: 40 } }}
            />
            <Button
              sx={{ width: { sm: 104, xs: 89 }, height: 38 }}
              color="error"
              variant="contained"
            >
              <Typography fontSize={{ sm: 14, xs: 12 }} fontWeight={600}>
                Subscribe
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              mt: { sm: 2, xs: 3 },
              ml: { sm: 0, xs: 1 },
              width: { xs: 320 },
              pl: { sm: 0, xs: 1 },
            }}
          >
            <Typography fontWeight={400} fontSize={{ sm: 14, xs: 12 }}>
              Follow us
            </Typography>

            <Stack
              sx={styles.styleStack}
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
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #FAFAFA",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { sm: 1185 },
            height: { sm: 70 },
            display: { sm: "flex", xs: "block" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ display: { sm: "block", xs: "none" } }}
              fontWeight={400}
              fontSize={14}
            >
              Advertising Terms and Conditions Platform Terms and Conditions
              Privacy Policy
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { sm: 1.5, xs: 0 },
                justifyContent: { xs: "flex-start", sm: "" },
              }}
              component="div"
            >
              <Box width={{ sm: 56, xs: 59 }} height={{ sm: 11, xs: 16 }}>
                <Box
                  component="img"
                  src={FooterLogo}
                  alt="ucars"
                  width="100%"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: { xs: 276, sm: 550 },
                  height: { xs: 40, sm: 20 },
                  textAlign: { xs: "center", sm: "start" },
                }}
              >
                <Typography
                  ml={1}
                  color="#5F5F5F"
                  fontWeight={400}
                  fontSize={{ sm: 12, xs: 10 }}
                >
                  CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly
                  owned by UCARS Pte Ltd
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { sm: "block", xs: "none" } }}>
            <Typography fontSize={12} fontWeight={400} color="#8C8C8C">
              © 2022. All rights reserved.
            </Typography>
          </Box>
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
