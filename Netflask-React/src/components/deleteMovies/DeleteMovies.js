import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, deleteMovies } from '../../actions/moviesActions';
import '../deleteMovies/deleteMovies.css'


const DeleteMovies = ({ deleteOpenMovie }) => {


    const [searchMovie, setSearchMovie] = useState('');
    const movies = useSelector((state) => state.movies.videos);
    const dispatch = useDispatch();

    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();
    };

    const handleDelete = (event) => {
        event.preventDefault();
        dispatch(deleteMovies(selectedMovieId));
    };

    useEffect(
        () => {
            dispatch(fetchMovies());
        },
        [dispatch],
    );

    const filteredMovies = movies.filter((videos) =>
        videos.title.toLowerCase().startsWith(searchMovie.toLowerCase())
    );
    console.log(selectedMovieId)

    return (
        <Fragment>
            <form onSubmit={handleSearch}>
                <div className='back'>
                    <input className='inputDeleteSearch'
                        type='search'
                        placeholder='rechercher'
                        value={searchMovie}
                        onChange={(event) => setSearchMovie(event.target.value)}
                    />
                    <div>
                        {searchMovie && (
                            <ul>
                                {filteredMovies.map((videos) => (
                                    <li className={`listMovies ${selectedMovieId === videos.id ? 'selected' : ''}`} 
                                        onClick={() => setSelectedMovieId(videos.id)} 
                                        key={videos.id}>
                                        {videos.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button className='deleteButton' onClick={handleDelete}>Supprimer</button>
                    </div>
                    <div >
                        <input className='deleteButton' type="submit" value="Fermer" onClick={() => deleteOpenMovie(false)}></input>
                    </div>
                </div>
            </form>
        </Fragment>
    )}

export default DeleteMovies

