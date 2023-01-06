import { AppBar, Box, Button, Toolbar, Typography, IconButton, Tooltip, Menu, MenuItem,Drawer ,CssBaseline} from "@mui/material"
import React from "react"
import { List, ListItem,  ListItemText,ListItemButton }  from "@mui/material";

const drawerWidth = 200;
export function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:'64px'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar><Typography variant="h6">
          Filter  </Typography></Toolbar>
        <List sx={{marginTop:'-20px'}}>
          {['Price', 'Brand'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );

}

