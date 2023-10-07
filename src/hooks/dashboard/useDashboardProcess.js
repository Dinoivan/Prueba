import { useNavigate } from 'react-router-dom';
import { FindByEmail} from '../../services/dashboard/DashboardService';

export function useDasboarProcess(setShowLogoutPopup){

    const navigate = useNavigate();
    
    const handleLogout = () => {
        setShowLogoutPopup(false);
        navigate('/');
      };

      return handleLogout;

}

export async function obtenerNombreUsuarioPorEmail(userEmail,token){
  try{
    const userData = await FindByEmail(userEmail,token);
    if(userData.user_name){
      return userData.user_name;
    }
    }catch(error){
      console.error("Error al obtener el nombre de usuario: ",error);
      return "Usuario Desconocido";
    }
}



export const obtenerIniciales = (nombreCompleto) => {
  const nombreArray = nombreCompleto.split(' ');
  return nombreArray.map(nombre => nombre.charAt(0)).join('');
};






