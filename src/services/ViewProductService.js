import axios from "./axios"

const getAllProducts = async ()=>{
    var response = await axios.get('/products');
    return response.data;
}
const sortProduct = async (min:any,max:any,sort:any )=>{
    var response = await axios.get('/products',{ params: { sort: sort,min:min,max:max } });
    return response.data;
    
}
const filterProduct = async (s)=>{
    var response = await axios.get('/products',{ params: { sort: s.sort,min:s.min,max:s.max } });
    console.log(response.data)
    return response.data;
    
}
export {getAllProducts,sortProduct,filterProduct}