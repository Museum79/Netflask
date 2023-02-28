
import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update_movies } from '../../actions/moviesActions';

import '../addMovies/addMovies.css';




const AddMovies = ({ setIsOpen }) => {

  const genres = useSelector((state) => state.movies.genresAndVideos);

  const [addGenre1, setAddGenre1] = useState({});
  const [addGenre2, setAddGenre2] = useState({});
  const [addMoviesData, setAddMoviesData] = useState({ category: "movie", title: "", date: "", description: "", picture: "", video: "" });

  const data = {
    category: addMoviesData.category,
    title: addMoviesData.title,
    date: addMoviesData.date,
    description: addMoviesData.description,
    picture: addMoviesData.picture,
    video: addMoviesData.video,
    genres: [addGenre1, addGenre2],
  }

  const dispatch = useDispatch();

  const submitMovie = (e) => {
    const response = dispatch(update_movies(data))
    console.log(response)
  }

  const handleChange = e => {
    setAddMoviesData({ ...addMoviesData, [e.target.name]: e.target.value });
  }

  const handleGenreOneChange = (event) => {
    const selectedGenre = genres.find(genre => genre.name === event.target.value);
    setAddGenre1({ name: selectedGenre.name, id: selectedGenre.id });
  }

  const handleGenre2OneChange = (event) => {
    const selectedGenre = genres.find(genre => genre.name === event.target.value);
    setAddGenre2({ name: selectedGenre.name, id: selectedGenre.id });
  }

  return (
    <Fragment>
      <div className='bgModal'>
        <div className='containerModal'>
          <form action="#">
          <div className='title'>Ajout d'une oeuvre</div>
            <div className='user-details'>
              <div onChange={handleChange} className='gender-details'>
                <input name='category' type='radio' value="movie" id='dot-1' defaultChecked></input>
                <input name='category' type='radio' value="serie" id='dot-2'></input>
                <span className='gender-title'>Catégorie</span>
                <div className='category'>
                  <label htmlFor="dot-1">
                    <span className='dot one'></span>
                    <span className='gender'>Films</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className='dot two'></span>
                    <span className='gender'>Séries</span>
                  </label>
                </div>
              </div>
            <div className='containerForm'>
              <div className='input-box'>
                  <span className='details'>Titre</span>
                  <input onChange={handleChange} value={addMoviesData.title} type="text" name='title' id='title' required></input>
              </div>
                <div className='input-box'>
                  <span className='details'>Année</span>
                  <input onChange={handleChange} value={addMoviesData.date} type="text" name='date' id='date' required></input>
                </div>

                <div className='input-box'>
                  <span className='details'>Genre 1</span>
                  <select onChange={handleGenreOneChange} type="select" required>
                    <option>-</option>{
                      genres.map((genre) =>
                        <option
                          value={genre.name}
                          key={genre.id}
                          id={genre.id} >{genre.name}
                        </option>)}
                  </select>
                </div>
              <div className='input-box'>
                <span className='details'>Genre 2</span>
                <select onChange={handleGenre2OneChange} type="select" required>
                  <option>-</option>
                  {genres.map((genre) => (<option id={genre.id}
                    key={genre.id} value={genre.name}>{genre.name}
                  </option>
                  ))}
                </select>
              </div>
              <div className='input-box'>
                <span className='details'>Affiche</span>
                <input onChange={handleChange} value={addMoviesData.picture} name='picture' id='picture' type="text" required></input>
              </div>
              <div className='input-box'>
                <span className='details'>Lien bande annonce</span>
                <input onChange={handleChange} value={addMoviesData.video} name='video' id='video' type="url" required></input>
              </div>
              <div className='input-box'>
                <div className='inputDesc'>
                <span className='details'>Description</span>
                <input onChange={handleChange} value={addMoviesData.description} className='espaceDesc' name='description' id='description' type="text" placeholder="Entrer un résumé de l'oeuvre" required></input>
                </div>
              </div>
            </div>
            </div>


            <div className='button'>
              <input type="submit" value="Valider" onClick={() => { setIsOpen(false); submitMovie() }}></input>
            </div>
            <div className='button'>
              <input type="submit" value="Annuler" onClick={() => setIsOpen(false)}></input>
            </div>
          </form>
        </div >
      </div >
    </Fragment >
  )
};


export default AddMovies



