import PropTypes from 'prop-types';

function Movie(video) {
    

    return (

        <div className='mx-1' >
            <img className=" custom-img" src={video.picture} alt={video.title} />
        </div>
    )
};

Movie.propTypes = {

    genre: PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })
}



export default Movie;