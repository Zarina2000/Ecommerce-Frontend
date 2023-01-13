import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { addProduct } from '../services/AddProductService';
import { Navigate, useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  async function formSubmit(e: any) {

    e.preventDefault();

    await addProduct({

      name: name,
      price: price,
      image: image
    });
    navigate(`/home`)
  }

  return (

    <form onSubmit={formSubmit}>
      <FormControl sx={{ marginTop: 20 }}>
        <Typography variant="h4"> Add Product  </Typography>
        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_name" label="Product Name" variant="outlined" onChange={e => setName(e.target.value)} />
        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_price" label="Price" variant="outlined" onChange={e => setPrice(e.target.value)} />
        <TextField sx={{ marginTop: 5, width: 500 }} id="outlined-basic" name="product_image" label="Image" variant="outlined" onChange={e => setImage(e.target.value)} />
        <Button sx={{ marginTop: 5, width: 150, marginLeft: 20 }} type="submit" variant="contained">ADD</Button>
      </FormControl>


    </form>

  );
}