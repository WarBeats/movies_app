import { useState } from "react";
import Buscador from "./componentes/Buscador";
import Crear from "./componentes/Crear";
import Listado from "./componentes/Listado";


const App = () => {
    
    const [listadoState, setListadoState] = useState([]);

    return (
        <>
            <div className="layout">
                {/*Cabecera*/}
                <header className="header">
                    <div className="logo">
                        <div className="play"></div>
                    </div>

                    <h1>Mis pelis</h1>
                </header>
                {/*Barra de navegacion*/}
                <nav className="nav">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Peliculas</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>

                {/*Contenido principal*/}
                <section className="content">

                    {/*aqui va el listado de peliculas*/}

                    <Listado listadoState={listadoState}
                             setListadoState={setListadoState} />


                </section>
                {/*Barra Lateral*/}

                <aside className="lateral">
                    
                    <Buscador listadoState={listadoState}
                              setListadoState={setListadoState} />

                    <Crear setListadoState={setListadoState} />

                </aside>
                {/*Pie de Pagina*/}
                <footer className="footer">
                    &copy; JavaScript Moderno: Guía para dominar el lenguaje - <a
                        href="https://www.udemy.com/course/javascript-fernando-herrera/">Link Curso Udemy</a>
                </footer>
            </div>

        </>
    );
}

export default App;
