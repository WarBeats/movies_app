import React, { useEffect, useState } from 'react'
import Editar from './Editar';



const Listado = ({ listadoState, setListadoState }) => {

    // const [listadoState, setListadoState] = useState([]);

    const [peliculaEditada, setPeliculaEditada] = useState(null);

    useEffect(() => {
        console.log("Componentes del listado de peliculas cargado");
        conseguirPeliculas();
    }, []);

    // Conseguir listado de peliculas en el localStorage
    const conseguirPeliculas = () => {

        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;

    }

    // Funcionalidad para borrar peliculas

    const borrarPeli = (id) => {

        //Conseguir peliculas almacenadas
        let peliculas_almacenadas = conseguirPeliculas();
        // Filtrar esas peliculas para que elimine del array la que no quiero

        let nuevo_array_pelis = peliculas_almacenadas.filter(peli => peli.id !== parseInt(id));

        console.log(peliculas_almacenadas, nuevo_array_pelis);

        // Actualizar estado del listado
        setListadoState(nuevo_array_pelis);

        // Actualizar los datos en el localStorage

        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));

    }




    return (
        <>


            {listadoState != null ?

                listadoState.map(peli => {

                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                            <button className="edit" onClick={() => setPeliculaEditada(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                            {/* aparece formulario de editar */}

                            {peliculaEditada === peli.id && (
                                <Editar peli={peli}
                                        conseguirPeliculas={conseguirPeliculas} 
                                        setPeliculaEditada={setPeliculaEditada}
                                        setListadoState={setListadoState}
                                        />
                            )}
                        </article>

                    );
                })

                : <h2> No hay peliculas para mostrar </h2>

            }


        </>
    )
}

export default Listado