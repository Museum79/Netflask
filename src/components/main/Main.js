import React from 'react'
import Header from '../header/Header'
import Example from '../caroussel/Caroussel'
import '../main/main.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveCategories, saveFilms } from '../../actions/moviesActions';
import MoviesBrowser from '../MoviesBrowser';

function Main() {

  const movies = useSelector((state) => state.movies.movies);
  const categories = useSelector((state) => state.movies.categories);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(saveFilms())
      dispatch(saveCategories());

      
      
    },
    [],
  );


  return (
    <div>
    <Header/>
    <Example/>

      {

        categories &&
        categories.map((category) => ( 
         
           <MoviesBrowser  key={category.id} {...category}  movies={movies.filter(movie => movie.category_id === category.id)} />
        ))
       
      }


    </div>
  )
}

export default Main