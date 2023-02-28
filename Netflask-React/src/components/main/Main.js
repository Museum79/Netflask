import React from 'react'
import Header from '../header/Header'
import Example from '../caroussel/Caroussel'
import MoviesBrowser from '../MoviesBrowser';
import AddMovies from '../addMovies/AddMovies'
import DeleteMovies from '../deleteMovies/DeleteMovies';
import { fetchGenres } from '../../actions/moviesActions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../main/main.css'


function Main() {

  const [isOpen, setIsOpen] = useState(false)
  const [deleteOpenMovie, setDeleteOpenMovie] = useState(false)
  const genres = useSelector((state) => state.movies.genresAndVideos);
  const genre = useSelector((state) => state.movies.selectedGenre);


  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchGenres());
    },
    [dispatch],
  );

 
  return (
    <div>
      <Header setIsOpen={setIsOpen} deleteOpenMovie={setDeleteOpenMovie} />

      {isOpen && <AddMovies setIsOpen={setIsOpen} />}

      {deleteOpenMovie && <DeleteMovies deleteOpenMovie={setDeleteOpenMovie} />}

      <Example />

      {
        JSON.stringify(genre) !== "{}" ?
            


          <MoviesBrowser {...genre} />
          :
          genres  ?

            genres.map((genre) => (
                
              <MoviesBrowser key={genre.id} {...genre} />
              
            ))

            

            :

            <div>error</div>
            
      }

    </div>

    
  )
}

export default Main

