import React from 'react'
import Header from '../header/Header'
import AddMovies from '../addMovies/AddMovies'
import Example from '../caroussel/Caroussel'
import '../main/main.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres } from '../../actions/moviesActions';
import MoviesBrowser from '../MoviesBrowser';


function Main() {

  const genres = useSelector((state) => state.movies.genresAndVideos);
  const genre = useSelector((state) => state.movies.selectedGenre);

  

  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchGenres());
      
    },
    [dispatch],
  );


  return (
    <div>
      <Header setIsOpen={setIsOpen}/>
      {
        isOpen && <AddMovies setIsOpen={setIsOpen}/>
      }

      <Example />

      {

        JSON.stringify(genre) !== "{}" ? 


        <MoviesBrowser {...genre}  />

        : 

        genres ?
        
        genres.map((genre) => (

          <MoviesBrowser key={genre.id} {...genre}  />
        )) 

        : 

        <div>error </div>

      }

    </div>
  )
}

export default Main