const Formulario = () => {
   return (
      <div className='bg-light'>
         <div className='container'>
            <div className='row'>
               <form className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
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
                              />
                           </div>
                        </div>
                     </div>
                     <button className='btn btn-secondary float-right'>Buscar</button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Formulario;
