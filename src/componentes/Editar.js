

const Editar = ({ peli, conseguirPeliculas, setPeliculaEditada, setListadoState }) => {

  const titulo_componente = "Editar películas";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    
    // Conseguir el target del evento (datos del formulario)

    let target= e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const pelis_almacenadas = conseguirPeliculas()
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    // Crear un objeto con ese indice

    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }
    // Actualizar el elemento con ese indice 
    pelis_almacenadas[indice] = peli_actualizada;

    // Guardar el nuevo array de objetos en el localStorage

    localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

    setListadoState(pelis_almacenadas);
    setPeliculaEditada(null);





  }
  return (
    <>

      <div className="edit_form">
        <h3 className="title">{titulo_componente}: {peli.titulo}</h3>
          <form id={ peli.id }onSubmit={ e => guardarEdicion(e, peli.id) }>
            <input type="text"
                   name="titulo"
                   className="titulo_editado"
                   defaultValue={peli.titulo}
            /> 

            <textarea 
                   name ="descripcion"
                   defaultValue={peli.descripcion}
                   className="descripcion_editada"
            
            />
            <input type="submit" className="editar"/>
           
          </form>
        
      </div>

    </>
  )
}

export default Editar