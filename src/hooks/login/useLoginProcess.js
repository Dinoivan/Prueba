import { loginUser } from "../../services/login/loginServices";
import { useNavigate } from 'react-router-dom';

export function useLoginProcess(setIsModalOpen,setErrorMessage){

    const navigate = useNavigate();

    const handleLogin = async (username,password) => {
       
        try {
            const response = await loginUser(username, password);
            if (response.result.access_token) {
                
                navigate('/dashboard');
            } else {
                setIsModalOpen(true);
                setErrorMessage("Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.");
            }
        } catch (error) {
            setIsModalOpen(true);
            setErrorMessage("Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo mas tarde.");
        }
    };

    return handleLogin;
}
