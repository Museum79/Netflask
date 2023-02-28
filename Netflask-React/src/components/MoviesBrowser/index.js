import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Movie from './Movie';
import './moviesBrowser.css'



function MoviesBrowser(genre) {

    const selected = useSelector((state) => state.movies.categorySelected);

    return (
        <div className='my-5'>
       <h4 className=' font-weight-bold text-white mx-4'>{genre.name}</h4>

       <div    
       className='container d-flex min-vw-100 p-3' >

       {

        selected !== "" ?

            genre.videos.filter((video) => video.category === selected).map((video) =>
            <Movie key={video.title} {...video} />
            )

            :
        
            genre.videos.map((video) => 
               <Movie key={video.title} {...video} />
           ) 
       }

</div>
       </div>
    )
    };

MoviesBrowser.propTypes = {
    genre: PropTypes.shape({
        name: PropTypes.string.isRequired,
        videos: PropTypes.array.isRequired
    }),
    
      }
  
export default MoviesBrowser;