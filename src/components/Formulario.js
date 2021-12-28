import { useState } from 'react';
import Error from './Error';

const Formulario = ({ setBusquedaLetra }) => {
   const [busqueda, setBusqueda] = useState({
      artista: '',
      cancion: '',
   });
   const [error, setError] = useState(false);

   // Leer el contenido del formulario
   const handleChange = (e) => {
      setBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value,
      });
   };
   const { artista, cancion } = busqueda;

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validamos que los campos del formulario
      if (artista.trim() === '' || cancion.trim() === '') {
         setError(true);
         return;
      }
      setError(false);

      // Enviar la búsqueda al componente principal
      setBusquedaLetra(busqueda);
   };

   return (
      <div className='bg-light'>
         <div className='container'>
            <div className='row'>
               <form
                  //
                  className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                  onSubmit={handleSubmit}
               >
                  <fieldset>
                     <legend className='text-center'>Buscar Letras de Canciones</legend>
                     <div className='row'>
                        <div className='col-md-6'>
                           <div className='form-group'>
                              <label>Artista</label>
                              <input
                                 //
                                 type='text'
                                 name='artista'
                                 className='form-control'
                                 placeholder='Nombre Artista'
                                 onChange={handleChange}
                                 value={artista}
                              />
                           </div>
                        </div>

                        <div className='col-md-6'>
                           <div className='form-group'>
                              <label>Canción</label>
                              <input
                                 //
                                 type='text'
                                 name='cancion'
                                 className='form-control'
                                 placeholder='Nombre Canción'
                                 onChange={handleChange}
                                 value={cancion}
                              />
                           </div>
                        </div>
                     </div>

                     <button
                        //
                        type='submit'
                        className='btn btn-secondary float-right'
                     >
                        Buscar
                     </button>

                     {/* Alerta si hay error */}
                     {error ? (
                        <Error
                           //
                           mensaje='Todos los campos son obligatorios'
                        />
                     ) : null}
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Formulario;
