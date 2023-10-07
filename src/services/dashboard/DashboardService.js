import axios from 'axios';
import {API_PUBLIC} from "../../constants/env"

const basePathfindbyid = "/api-user/user"

//Servicio para encontrar  usuario esta registrado
export async function FindByEmail(email, token){
    try{
        const response = await axios.get(`${API_PUBLIC}${basePathfindbyid}/find-by-email/${email}`, {
            
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.result;
    } catch(error){
        console.error("Error al obtener los datos del usuario: ", error);
        throw error;
    }
}

