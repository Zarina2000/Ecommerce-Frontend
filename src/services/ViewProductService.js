import axios from "./axios"

const getAllProducts = async ()=>{
    var response = await axios.get('/products');
    return response.data;
}
const sortProduct = async (s)=>{
    var response = await axios.get('/products',{ params: { sort: s } });
    return response.data;
    
}
const filterProduct = async (s)=>{
    var response = await axios.get('/products',{ params: { min: s.min,max:s.max } });
    console.log(response.data)
    return response.data;
    
}
export {getAllProducts,sortProduct,filterProduct}