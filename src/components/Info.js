const Info = ({ info }) => {
   if (Object.keys(info).length === 0) return null;

   const { strArtistThumb, strGenre, strBiographyES, strFacebook, strTwitter, strLastFMChart } = info;

   return (
      <div className='card border-light mb-5'>
         <h3 className='card-header text-white font-weight-bold'>Información Artista</h3>

         <div className='card-body'>
            <img src={strArtistThumb} alt='Logo artista' className='card-img-top' />

            <p className='card-text'>Género: {strGenre}</p>
            <h2 className='card-text'>Biografiá</h2>
            <p className='card-text'>{strBiographyES}</p>
         </div>

         <div className='card-body'>
            <a href={`https://${strFacebook}`} target='_blank' rel='noopener noreferrer'>
               <i className='fab fa-facebook'></i>
            </a>
            <a href={`https://${strTwitter}`} target='_blank' rel='noopener noreferrer'>
               <i className='fab fa-twitter'></i>
            </a>
            <a href={`${strLastFMChart}`} target='_blank' rel='noopener noreferrer'>
               <i className='fab fa-lastfm'></i>
            </a>
         </div>
      </div>
   );
};

export default Info;
