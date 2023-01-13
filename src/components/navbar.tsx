import { AppBar, Box, Button, Toolbar, Typography, IconButton, Tooltip, Menu, MenuItem, Avatar } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Login } from "./login";
import { getUserProfile } from '../services/UserProfileService';
import { useQuery } from "react-query";
import { googleLogout } from "@react-oauth/google";
interface NavItems {
  text: string;
  link: string;
}
export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [picture, setPicture] = useState<null | string>(null);
 
  const logincheck = () => {
    console.log("in check");
    if (localStorage.getItem("picture") != null) {
      setPicture(localStorage.getItem("picture"));
      console.log("in setLogged");
     
    }
  }

  const logoutHandler = () => {
    googleLogout();
    localStorage.clear();
    console.log("Logout Succesful");
    window.location.reload();
  };


  useEffect(logincheck, [, picture]);

  // const {data} = useQuery("userData",getUserProfile,{onSuccess : OnSuccess,refetchInterval : 6000 });
  const navItems: NavItems[] = [{ text: "Products", link: "products" }, { text: "Profile", link: "Profile" }, { text: "AddProduct", link: "AddProduct" }];
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ marginLeft: '10px' }}>
            Ekart
          </Typography>
          <Box sx={{ marginLeft: '1300px' }}>
            <Tooltip title="View menu">
              <IconButton onClick={handleOpenUserMenu} >
                {!picture && <AccountCircleIcon fontSize="large" />}
                {picture && <Avatar alt="Profile Picture" src={picture} />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' }}
              id="menubar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {navItems.map((navItems) => (
                <MenuItem key={navItems.text} onClick={handleCloseUserMenu}>
                  <Link to={navItems.text} style={{
                    color: "black",
                    textDecoration: "none"
                  }}> <Typography>{navItems.text}</Typography> </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleOpen}>
                Login
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Login open={open} setOpen={setOpen} />
    </Box>
  )
}