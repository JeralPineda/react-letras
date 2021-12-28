import { useEffect, useState } from 'react';
import axios from 'axios';

import Formulario from './components/Formulario';

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
      <div>
         <Formulario setBusquedaLetra={setBusquedaLetra} />
      </div>
   );
}

export default App;
