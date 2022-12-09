import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  styled,
  InputBase,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Radio,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { FILTER_BRANDING, CAR_BRANDING_LIST } from "../utils/LabelFilter";
import AddBrand from "./AddBrand";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#F1F1F1",
  "&:hover": {
    backgroundColor: "#f1f1f5",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "240px",
  height: 40,
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#8C8C8C",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "#8C8C8C",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  backgroundColor: "#FFFFFF",
  border: "1px solid #9e9e9e",
  borderRadius: 2,
};

function BodyAdmin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultQuery, setResultQuery] = useState(CAR_BRANDING_LIST);
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => setOpenModal(false);
  const handleModalOpen = () => setOpenModal(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleFilterCar = () => {
      let filterCar = CAR_BRANDING_LIST;
      filterCar = CAR_BRANDING_LIST.filter((car) =>
        car.brand.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );

      setResultQuery(filterCar);
    };

    handleFilterCar();
  }, [searchQuery]);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: 700,
          }}
        >
          <Typography variant="h6" fontWeight={600} sx={{ color: "#2F465F" }}>
            CAR BRANDS LIST
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              size="small"
              sx={{ color: "#212121" }}
              p={0}
              onClick={handleClick}
            >
              {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>
            <Typography variant="subtitle2">View All</Typography>
          </Box>

          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {FILTER_BRANDING.map((filter) => (
              <MenuItem onClick={handleClose} key={filter.value}>
                {filter.label}
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ borderRadius: 10, width: 240 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#8C8C8C" }} fontSize="small" />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleSearch}
                placeholder="Search car brand"
              />
            </Search>
          </Box>
        </Box>

        <Box>
          <Button onClick={handleModalOpen} variant="contained">
            + Add Brand
          </Button>
        </Box>

        <Modal open={openModal} onClose={handleModalClose}>
          <Box style={style}>
            <AddBrand handleModalClose={handleModalClose} />
          </Box>
        </Modal>
      </Box>

      <TableContainer sx={{ p: 1 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {resultQuery.map((car) => (
              <TableRow
                key={car.brand}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      borderRight: `${
                        car.status === "Active"
                          ? "1px solid #5F5F5F"
                          : "1px solid #0FC97B"
                      }`,
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Radio />
                    <Box
                      component="img"
                      height="40px"
                      width="40px"
                      src={car.logo}
                      pr={0.5}
                    />
                  </Box>
                </TableCell>

                <TableCell component="th" scope="row">
                  <Typography color="#2F465F" fontWeight={500} variant="body2">
                    {car.brand}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 300,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontSize={12}
                      color="#8C8C8C"
                      variant="caption text"
                    >
                      {car.description} |
                      <Typography
                        component="span"
                        fontSize={12}
                        fontWeight={500}
                        color="#0F5EDD"
                        variant="caption text"
                        ml={2}
                      >
                        {car.model}
                      </Typography>
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      fontSize={12}
                      fontWeight={500}
                      color="#2F465F"
                      variant="caption text"
                      mb={1}
                    >
                      Last Update
                    </Typography>
                    <Typography
                      fontSize={12}
                      fontWeight={400}
                      color="#8C8C8C"
                      variant="caption text"
                    >
                      {car.updateAt}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      width: 80,
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#FAFAFA",
                      color: `${
                        car.status === "Active" ? "#5F5F5F" : "#1F7B4D"
                      }`,
                    }}
                  >
                    <FiberManualRecordIcon />
                    {car.status}
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Button size="small" variant="outlined" color="inherit">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BodyAdmin;
