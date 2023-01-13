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
  const logoutHandler = () => {
    googleLogout();
    localStorage.clear();
    console.log("Logout Succesful");
    window.location.reload();
  };
  const [loggedIn, setLoggedIn] = useState(false)
  const getLogged = () : any =>{

    if(loggedIn){
    return (
        <MenuItem>
        <Button style={{
                color : "black",
                textDecoration: "none"
            }} onClick={logoutHandler}>Logout</Button>
        </MenuItem>
        )
    }

    else{
        return (
            <MenuItem>
            <Button style={{
                color : "black",
                textDecoration: "none"

            }} onClick={handleOpen}>Login</Button>

            </MenuItem>

        )

          }
    }
  useEffect(logincheck, [, picture]);
  var navItems : NavItems[];
  if(loggedIn){
    navItems = [{ text: "Products", link: "products" }, { text: "AddProduct", link: "AddProduct" }];
  }
  else {
    navItems = [];
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
              {getLogged()}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Login open={open} setOpen={setOpen} setLoggedIn={setLoggedIn} />
    </Box>
  )
}