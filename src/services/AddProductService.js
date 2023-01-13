import axios from "./axios"

const addProduct = async (data)=>{
    console.log(data);
    var res = await axios.post('/addProduct', data);
    console.log(res);
    return res;
}

export {addProduct}