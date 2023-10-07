import { useState} from "react";


export function useDasboarState(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loading,setLoading] = useState(true);
    const [userIniciales, setUserIniciales] = useState("");
    const [token, setToken] = useState("");
    

return {

    menuOpen, setMenuOpen,
    showLogoutPopup, setShowLogoutPopup,
    loading,setLoading,
    token,setToken,
    userEmail,setUserEmail,
    userIniciales,setUserIniciales
};

}
