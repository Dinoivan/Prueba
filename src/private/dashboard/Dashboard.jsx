    import Lupa from "../../assets/imagenes/lupa.png"
    import { useDasboarState } from "../../hooks/dashboard/useDashboarState";
    import { useDasboarProcess } from "../../hooks/dashboard/useDashboardProcess";
    import Imagenes from "../../assets/imagenes/logo.png";
    import Figura from "../../assets/imagenes/Figura.png";
    import { useEffect } from "react";
    import {obtenerNombreUsuarioPorEmail} from "../../hooks/dashboard/useDashboardProcess";
    import {obtenerIniciales} from "../../hooks/dashboard/useDashboardProcess";
    import decode from 'jwt-decode';
    import { useAuth } from "../../contexts/Authutils";
    import { Header } from "../components/Header";
    import { WelcomeSection } from "./WelcomeSection";
    import { SideMenu } from "./../components/SideMenu";
    import { MainContent } from "./MainContent";
    import { Footer } from "./../components/Footer";
    import "../../styles/dashboard/Dashboard.css"

export function Dashboard() {

        const {  menuOpen, setMenuOpen,
                 showLogoutPopup, setShowLogoutPopup,userEmail,setUserEmail,
                 loading,setLoading,userIniciales,setUserIniciales
              } = useDasboarState();

              const { idToken } = useAuth(); // Obtiene el idToken del contexto de autenticación
            
              const handleLogout  = useDasboarProcess(setShowLogoutPopup);

            useEffect(() => {
                if (idToken) {
                  // Decodifica el token para obtener el email del usuario
                  const decodedToken = decode(idToken);
            
                  if (decodedToken && decodedToken.email) {
                    const userEmailFromToken = decodedToken.email;
                    setUserEmail(userEmailFromToken);
            
                    // Llama al servicio para obtener el nombre de usuario utilizando el correo electrónico
                    obtenerNombreUsuarioPorEmail(userEmailFromToken, idToken)
                      .then(userName => {
                        setLoading(false);

                        const iniciales = obtenerIniciales(userName);
                        setUserIniciales(iniciales);

                        setUserEmail(userName);
                      })
                      .catch(error => {
                        console.error('Error al obtener el nombre de usuario:', error);
                      });
                  }
                }
              }, [idToken,setLoading,setUserEmail,setUserIniciales]);

        return(
            <>

        
            <Header 
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen} 
                Imagenes={Imagenes}
                Figura={Figura}
                loading={loading}
                userIniciales={userIniciales} 
                userEmail={userEmail}
                showLogoutPopup={showLogoutPopup} 
                handleLogout={handleLogout} 
                setShowLogoutPopup={setShowLogoutPopup}
             />

             <WelcomeSection
                menuOpen={menuOpen}
                loading={loading}
                userEmail={userEmail}
                Lupa={Lupa}
             />

             <SideMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
             />

            <div className={menuOpen ? "menu-overlay--abierto": "menu-overlay"}></div>

            <div className={menuOpen ? "main--abierto": "main"}>
             <MainContent/>
            </div>

           <Footer/>

            </>
        );
    }
