import { useState } from "react"

const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // Crear estado y actualizarlo
        setBusqueda(e.target.value);

        // Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        })

        // Comprobar si hay un resultado

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);

        } else {
            setNoEncontrado(false);

        }


        // Dar valor de todo en el localStorage
        setListadoState(pelis_encontradas);
        // Actualizar estado del listado principal con lo filtrad
    }
    return (
        <>
            <div className="search">
               
                <h3 className="title">Buscador: {busqueda}</h3>
                
                {(noEncontrado && busqueda.length > 1) && (
                    <span className="no-encontrado">No se ha encontrado ninguna pelicula</span>
                )}
                <form action="">
                    <input type="text"
                        id="searched_field"
                        name="busqueda"
                        autoComplete='off'

                        onChange={buscarPeli}
                    />
                    <button>Buscar</button>
                </form>
            </div>
        </>
    )
}

export default Buscador