import axios from "./axios"

const addUser = async (data)=>{
    var response = await axios.post('/addUser', data);
    console.log(response);
    return response;
}

export {addUser}