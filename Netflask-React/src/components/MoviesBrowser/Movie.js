import PropTypes from 'prop-types';

function Movie(movie) {


    return (
       

<div className='mx-1' >
  <img className=" custom-img" src={movie.image} alt={movie.title} />
  </div>


    
    )
};

Movie.propTypes = {
    
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
    
    
}
  


export default Movie;