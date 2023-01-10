
import axios from "axios"
//localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiZmlkYSIsImxhc3RuYW1lIjoiZmFpcnVzIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NzEyNTE0MTAsImV4cCI6MTY3MTg1NjIxMCwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QifQ.CsPMKul1jcjpHDdr38TVmSUOz0bv8dHMEB0ltwKtnmg")
axios.defaults.baseURL = 'http://localhost';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
export default axios;

