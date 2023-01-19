import PropTypes from 'prop-types';

import { useHorizontalScroll } from './HorizontalScroll';

import Movie from './Movie';


import './moviesBrowser.css'



function MoviesBrowser(category) {

    const scrollRef = useHorizontalScroll(category.movies.length);

    


    return (
        <div className='my-5'>
       <h3 className=' font-weight-bold text-white mx-5'>{category.name}</h3>

     


       <div  ref={scrollRef} style={{ overflowX: "hidden" }}  
       className='container d-flex min-vw-100 p-0' >

       {

        
            category.movies.map((movie) => 
               <Movie key={movie.title} {...movie} />
           ) 
       }



</div>

       </div>
    )



    };


MoviesBrowser.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        movies: PropTypes.array.isRequired
    }),
    
    
      }
  


export default MoviesBrowser;