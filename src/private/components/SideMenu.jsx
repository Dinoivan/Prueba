import Proptypes from 'prop-types'
import { Link} from 'react-router-dom';
import { faGreaterThan,faTimes,faLessThan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/dashboard/SideMenu.css"

export function SideMenu({menuOpen,setMenuOpen})
{
    return(
        <section className={`menu__side ${menuOpen ? 'menu__side_move' : ''}`}>

            <div className={menuOpen ? "icon-menu--open": "icon__menu"}>
                <FontAwesomeIcon icon={ menuOpen ? faLessThan : faGreaterThan } onClick={() => setMenuOpen(!menuOpen)}/>
            </div>

            <div className="icon__cerrar">
                <FontAwesomeIcon icon={faTimes} onClick={() => setMenuOpen(!menuOpen)}/>
            </div>

            <section className="options__menu">
        
                    <Link to="/">
                    <div className={`option ${menuOpen ? "menuOpen option-modificar  " : "option-modificar"}`}>

                        <section className='option__d'>
                            <span></span>
                        </section>  
                        <h4>Principal</h4>      
                    </div>

                    </Link>
                
                    <Link to="#">
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__i'>
                            <span></span>
                        </section>
                        <h4>Importaciones</h4>
                    </div>
                    </Link>

                    <Link to="#">
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__e'>
                            <span></span>
                        </section>
                        <h4>Exportaciones</h4>
                    </div>

                    </Link>

                    <Link to="#">
                    <div className={`option ${menuOpen ? "menuOpen" : ""}`}>
                        <section className='option__r'>
                            <span></span>
                        </section>
                        <h4>Reclamaciones</h4>
                    </div>
                    </Link>

            </section>
   </section>
    )
}

SideMenu.propTypes = {
    menuOpen: Proptypes.bool.isRequired,
    setMenuOpen: Proptypes.func.isRequired

}