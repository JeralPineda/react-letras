import { useEffect, useState } from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';
import Cancion from './components/Cancion';

function App() {
   const [busquedaLetra, setBusquedaLetra] = useState({});
   const [letra, setLetra] = useState('');

   useEffect(() => {
      // Validamos que el state no venga vació
      if (Object.keys(busquedaLetra).length === 0) return;

      const consultarApiLetra = async () => {
         const { artista, cancion } = busquedaLetra;

         const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

         const resultado = await axios(url);

         setLetra(resultado.data.lyrics);
      };
      consultarApiLetra();
   }, [busquedaLetra]);

   return (
      <>
         <Formulario setBusquedaLetra={setBusquedaLetra} />

         <div className='container mt-5'>
            <div className='row'>
               <div className='col-md-6'></div>

               <div className='col-md-6'>
                  <Cancion letra={letra} />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
