import axios from 'axios'
import Vue from 'vue'
const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})
http.interceptors.request.use(
 config =>{
     if(localStorage.token){
        config.headers.Authorization = 'rearer '+ localStorage.token
     }   
     return config
 }   
)

http.interceptors.response.use(
    config =>{
        return config
        
    },error =>{
        console.log(error.response.data)
        Vue.prototype.$message({
            message:error.response.data.message
        })
    }
)
export default http