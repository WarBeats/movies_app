import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({ setListadoState }) => {

    const tituloComponente = "Añadir película";

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    const { titulo, descripcion } = peliState; // desestructuramos y luego pasamos al titulo

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;


        //alert(`${titulo} "-" ${descripcion}`)

        // Crear objeto de pelicula a guardar

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        // Guardar estado
        setPeliState(peli);

        //Actualizar el estado del lisado principal

        setListadoState(elementos => {
            return [...elementos, peli]
        });

        //Guardar en el almacenamiento principal 
        GuardarEnStorage("pelis", peli);

        

        


    }

    


    return (
        <>

            <div className="add">
                <h3 className="title">{tituloComponente}</h3>
                <strong>

                    {(titulo && descripcion) && `Has creado la pelicula ${titulo}`}

                </strong>

                <form onSubmit={conseguirDatosForm}>
                    <input type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Titulo" />

                    <textarea
                        id="descripcion"
                        name="descripcion"
                        placeholder="Descripcion"></textarea>

                    <input type="submit"
                        id="save"
                        value="Guardar" />
                </form>
            </div>
        </>
    )
}

export default Crear