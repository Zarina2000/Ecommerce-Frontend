import { Alert, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Drawer, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Input, InputLabel, Stack, Switch, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState, useRef, useReducer } from "react";
import { getAllProducts, sortProduct, filterProduct } from '../services/ViewProductService';
import { Navigate, useNavigate } from "react-router-dom";
const drawerWidth = 200;
interface Product {
    product_name: string;
    price: number;
    product_image: string;
}

const CardDetails = (product: Product, index: any): any => {

    return (

        <Grid item lg={4}>
            <Card sx={{ maxWidth: 345, marginLeft: 5, marginTop: 10 }}>
                <CardMedia
                    sx={{ height: 200, display: "block", objectfit: "fill" }}
                    component="img"
                    src={product.product_image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.product_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ width: 150, marginLeft: 6, marginBottom: 2, backgroundColor: "#00B5E2", color: "white" }}>Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
export const ViewProduct = () => {
    const [error, setError] = useState('');
    const [products, setProduct] = useState([]);
    console.log(products);
    useEffect(() => {
        getAllProducts().then((data) => {
            console.log(data);
            setProduct(data.data);
        });
    }, []);

    const validateFilter = () => {

        if (min && max) {
            if (isNaN(+min) && min.length > 0) {
                setError("Min is Invalid");
                return false;
            }
            else if (isNaN(+max) && max.length > 0) {
                setError("Max is Invalid");
                return false;
            }

            else if (parseInt(min) > parseInt(max)) {
                setError("Min Greater than Max");
                return false;
            }

            else {
                setError("")
                return true;
            }

        }

    }

    function sortAscending(): any {
        sortProduct('asc').then((data) => {
            setProduct(data.data)
        })
    }
    function sortdecending(): any {
        sortProduct('desc').then((data) => {
            setProduct(data.data)
        })
        console.log("hi");
    }

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const handleOption = (state: string) => {
        if (state === "ASC") {
            sortdecending();
            return "DESC"
        }
        else {
            sortAscending();
            return "ASC"
        }
    }
    const [param, setParam] = useReducer(handleOption, "ASC")

    async function formSubmit(e: any) {
        console.log(error);
        e.preventDefault();
        if (validateFilter()) {
            await filterProduct({
                min: min,
                max: max
            }).then((data) => {
                setProduct(data.data)
            });
        }
    }
    return (

        <><Box sx={{ display: 'flex' }}>
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
                        <Typography> Give Filter range  </Typography>
                        <TextField sx={{ marginTop: 1, width: 150, marginBottom: 2, marginLeft: 1 }} id="outlined-basic" name="product_name" label="Min" onChange={e => setMin(e.target.value)} variant="outlined" />
                        <TextField sx={{ marginTop: 1, width: 150, marginBottom: 2, marginLeft: 1 }} id="outlined-basic" name="product_name" label="Max" onChange={e => setMax(e.target.value)} variant="outlined" />
                        <Button sx={{ marginTop: 1 }} type="submit" variant="contained">Filter</Button>
                    </FormControl>
                </form>
                {error && <Alert severity='error'>{error}</Alert>}
            </Drawer>
        </Box><><FormGroup sx={{ marginTop: 10, marginRight: 140 }}>

            <FormControlLabel value="start"
                control={<Switch color="primary" />}
                label="SORT"
                labelPlacement="start"
                onChange={setParam} />
            <Typography sx={{ marginLeft: 30 }}>Asc To Desc  </Typography>

        </FormGroup><Grid container spacing={3} sx={{ marginLeft: 40, width: 1000 }}>
                    {products.map(CardDetails)}
                </Grid></></>
    )

}
