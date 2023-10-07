import axios from 'axios';
import {API} from "../../constants/env"

const basePath = "/api-cognito/cognito";

export async function loginUser(username, password) {
    
    const body = {username: username,password: password};

    try{

        const response = await axios.post(`${API}${basePath}/login`, body,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.status === 200  && response.data.result) {
        localStorage.setItem('access_token', response.data.result.access_token);
        localStorage.setItem('id_token', response.data.result.id_token);
        localStorage.setItem('refresh_token', response.data.result["refresh_token"]);
    }
        return response.data;
    }catch(error){
        console.error("Error al iniciar sesión: ",error);
        throw error;
    }
}


