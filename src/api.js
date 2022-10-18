import axios from 'axios';

export default axios.create({
    baseURL: `http://localhost:8080/api/v1` //локальный бек
    // baseURL: "http://172.20.10.2:8080/api/v1" //Виталика ноут на моей точке
    // baseURL:"http://192.168.132.182:8080/api/v1" //Виталика нуот на Возного точке
    // baseURL:"http://172.20.10.3:8080/api/v1" //Мой леново
    // baseURL:"http://10.5.113.141:8080/api/v1"
    // baseURL:"http://10.5.113.128:8080/api/v1" //кафедральный компьютер

});


