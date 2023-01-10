import axios from "./axios"

const getUserProfile = async ()=>{
    var response = await axios.get('/profile');
    return response.data;
}

export {getUserProfile}