import { AppBar,Box,Button,Toolbar, Typography ,IconButton, Tooltip, Menu, MenuItem} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react"
export const Navbar = ()=>{
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navItems = ['My profile','Wishlist','My Cart','Login','Logout'];
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ marginLeft:'10px'}}>
            Ekart
          </Typography>
          <Box sx={{ marginLeft:'1300px'}}>
            <Tooltip title="View menu">
              <IconButton onClick={handleOpenUserMenu} >
                <AccountCircleIcon fontSize="large"/>
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
              {navItems.map((menu) => (
                <MenuItem key={menu} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}