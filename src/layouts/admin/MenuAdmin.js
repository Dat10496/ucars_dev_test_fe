import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";

import iconCar from "../../images/iconCar.png";
import brandLogo from "../../images/brand_logo.png";
import iconFolder from "../../images/iconfolder.png";

function MenuAdmin() {
  const [menu, setMenu] = useState(false);

  const handleCLickMenu = (event) => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#323435",
        p: 2,
        width: 260,
        maxHeight: 768,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 6 }}>
        <Box component={RouterLink} to="/" width={102} height={28}>
          <Box component="img" alt="brand_logo" src={brandLogo} width="100%" />
        </Box>
        <MenuOpenIcon
          sx={{
            color: "white",
            "&: hover": {
              cursor: "pointer",
            },
          }}
          size="small"
        />
      </Box>

      <Button
        variant="contained"
        sx={{ width: 208, height: 52 }}
        color="primary"
      >
        <Box width={20} height={20} mr={1}>
          <Box fontWeight={400} alt="iconCar" src={iconCar} component="img" />
        </Box>
        <Typography fontWeight={300} fontSize={18}>
          Car Brand
        </Typography>
      </Button>

      <Box sx={{ color: "#8C8C8C", mt: 2 }}>
        <Button
          sx={{
            width: 208,
            display: "flex",
            justifyContent: "space-evenly",
            color: "#8C8C8C",
          }}
          p={0}
          onClick={handleCLickMenu}
        >
          <Box
            sx={{ mr: 1 }}
            alt="iconFolder"
            src={iconFolder}
            component="img"
          />
          <Typography fontWeight={400}>Folder</Typography>
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>

        {menu && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "1px solid #8C8C8C",
              width: 208,
            }}
          >
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>
              <Typography ml={2} fontWeight={400}>
                Menu Item
              </Typography>
            </Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>
              <Typography ml={2} fontWeight={400}>
                Menu Item
              </Typography>
            </Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>
              <Typography ml={2} fontWeight={400}>
                Menu Item
              </Typography>
            </Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>
              <Typography ml={2} fontWeight={400}>
                Menu Item
              </Typography>
            </Button>
          </Box>
        )}
      </Box>

      <Button
        sx={{
          width: 208,
          display: "flex",
          justifyContent: "flex-start",
          color: "#8C8C8C",
          mt: 1,
        }}
        p={0}
      >
        <Box sx={{ mr: 6 }} alt="iconFolder" src={iconFolder} component="img" />
        <Typography fontWeight={400}>Tasks</Typography>
      </Button>
      <Button
        sx={{
          width: 208,
          display: "flex",
          justifyContent: "flex-start",
          color: "#8C8C8C",
          mt: 1,
        }}
        p={0}
      >
        <Box sx={{ mr: 6 }} alt="iconFolder" src={iconFolder} component="img" />
        <Typography fontWeight={400}>Modules</Typography>
      </Button>
      <Button
        sx={{
          width: 208,
          display: "flex",
          justifyContent: "flex-start",
          color: "#8C8C8C",
          mt: 1,
        }}
        p={0}
      >
        <Box sx={{ mr: 6 }} alt="iconFolder" src={iconFolder} component="img" />
        <Typography fontWeight={400}>Notification</Typography>
      </Button>

      <Divider variant="middle" color="#8C8C8C" sx={{ mt: 8 }} />

      <Button
        sx={{
          width: 208,
          display: "flex",
          justifyContent: "flex-start",
          color: "#8C8C8C",
          mt: 5,
        }}
        p={0}
      >
        <SettingsIcon size="small" sx={{ mr: 5 }} />
        <Typography fontWeight={400}>Setting</Typography>
      </Button>
    </Box>
  );
}

export default MenuAdmin;
