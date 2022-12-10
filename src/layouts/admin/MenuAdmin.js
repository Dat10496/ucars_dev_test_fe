import { Box, Button, Divider } from "@mui/material";
import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SettingsIcon from "@mui/icons-material/Settings";

import Logo from "../../components/Logo";
import iconCar from "../../images/iconcar.png";
import iconfolder from "../../images/iconfolder.png";

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
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo sx={{ height: 60, width: 80 }} />
        <MenuOpenIcon sx={{ color: "white" }} size="small" />
      </Box>

      <Button variant="contained" sx={{ width: 208 }}>
        <Box sx={{ mr: 1 }} alt="iconcar" src={iconCar} component="img" />
        Car Brand
      </Button>

      <Box sx={{ color: "#8C8C8C" }}>
        <Button
          sx={{
            width: 208,
            display: "flex",
            justifyContent: "space-between",
            color: "#8C8C8C",
          }}
          p={0}
          onClick={handleCLickMenu}
        >
          <Box
            sx={{ mr: 1 }}
            alt="iconfolder"
            src={iconfolder}
            component="img"
          />
          Folder
          {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>

        {menu && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "1px solid #8C8C8C",
              width: 150,
              ml: 2,
              mt: 2,
              p: 2,
            }}
          >
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>Menu Item</Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>Menu Item</Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>Menu Item</Button>
            <Button sx={{ color: "#8C8C8C", m: 0.5 }}>Menu Item</Button>
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
        <Box sx={{ mr: 6 }} alt="iconfolder" src={iconfolder} component="img" />
        Tasks
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
        <Box sx={{ mr: 6 }} alt="iconfolder" src={iconfolder} component="img" />
        Modules
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
        <Box sx={{ mr: 6 }} alt="iconfolder" src={iconfolder} component="img" />
        Notification
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
        Setting
      </Button>
    </Box>
  );
}

export default MenuAdmin;
