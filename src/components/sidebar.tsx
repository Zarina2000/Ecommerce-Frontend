import { AppBar, Box, Button, Toolbar, Typography, IconButton, Tooltip, Menu, MenuItem, Drawer, CssBaseline, FormControl, TextField } from "@mui/material"
import React, { useState } from "react"
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { filterProduct } from '../services/ViewProductService';
const drawerWidth = 200;
export function Sidebar() {
  const [products, setProduct] = useState([]);
  const [min, setMin] = useState('');

  const [max, setMax] = useState('');

  async function formSubmit(e: any) {
    e.preventDefault();
    await filterProduct({
      min: min,
      max: max
    }).then((data) => {
      setProduct(data.data)
    })
      ;
  }


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
            marginTop: '64px'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar><Typography variant="h5" sx={{ marginLeft: 5, marginTop: 2 }}>
          Filter  </Typography></Toolbar>
        <form onSubmit={formSubmit}>
          <FormControl sx={{ marginTop: 1 }}>
            <Typography > Give Filter range  </Typography>
            <TextField sx={{ marginTop: 1, width: 150, marginBottom: 2, marginLeft: 1 }} id="outlined-basic" name="product_name" label="Min" onChange={e => setMin(e.target.value)} variant="outlined" />
            <TextField sx={{ marginTop: 1, width: 150, marginBottom: 2, marginLeft: 1 }} id="outlined-basic" name="product_name" label="Max" onChange={e => setMax(e.target.value)} variant="outlined" />
            <Button sx={{ marginTop: 1 }} type="submit" variant="contained">Filter</Button>
          </FormControl>
        </form>
      </Drawer>
    </Box>
  );

}

