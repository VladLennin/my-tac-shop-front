import axios from 'axios';

export default axios.create({
    // baseURL: `http://localhost:8080/api/v1`
    baseURL: "http://172.20.10.4:8080/api/v1"
    // baseURL:"http://192.168.243.182:8080/api/v1"
});


