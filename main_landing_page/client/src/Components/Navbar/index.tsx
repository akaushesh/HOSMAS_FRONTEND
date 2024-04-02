"use client";

import React, { MouseEvent, useState } from "react";
import { AppBar, Box, Toolbar, Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <AppBar sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Image
            src="/assets/tietlogo.png"
            width={50}
            height={50}
            alt="tiet_logo"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box>
            <Button color="inherit">Services</Button>
          </Box>
          <Box>
            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            >
              Hostels
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              slotProps={{
                paper: {
                  elevation: 2,
                  style: { width: "130px", maxWidth: "none" },
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  router.push("/hostels/hostele");
                  handleClose();
                }}
              >
                Hostel E
              </MenuItem>
              <MenuItem onClick={handleClose}>Hostel B</MenuItem>
              <MenuItem onClick={handleClose}>Hostel M</MenuItem>
            </Menu>
          </Box>
          <Box>
            <Button color="inherit">Announcements</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
