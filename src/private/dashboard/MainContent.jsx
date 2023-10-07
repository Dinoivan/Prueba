import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import "../../styles/dashboard/MainContent.css"

export function MainContent(){
    return(

        <main className="principal">

            <section className='texto'>
                <h1>Módulos activos</h1>
            </section> 

            <section className='modulos'>
                <section className="principal__modulos--contenido">

                        <section className="contenido">
            
                            <section className='contenido__i'>
                                <span></span>
                            </section>

                            <h1>Importaciones</h1>
                            <p>Coordinacion, control y optimización</p>

                        </section>

                        <section className="icono">
                        <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>
                
                <section className="principal__modulos--contenido">

                        <section className="contenido">
        
                            <section className='contenido__e'>
                                <span></span>
                            </section>

                            <h1>Exportaciones</h1>
                            <p>Registro de documentación para venta</p>
                        </section>

                        <section className="icono">
                        <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>

                <section className="principal__modulos--contenido">
                        <section className="contenido">
            
                            <section className='contenido__r'>
                                <span></span>
                            </section>

                            <h1>Reclamaciones</h1>
                            <p>Inicio y seguimiento</p>
                        </section>

                        <section className="icono">
                        <Link to="/"><span><FontAwesomeIcon icon={faArrowRight} /></span></Link>
                        </section>

                </section>
        </section>
    </main>

    )
}

