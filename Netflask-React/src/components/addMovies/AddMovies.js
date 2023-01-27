
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import '../addMovies/addMovies.css';


const AddMovies = ({ setIsOpen }) => {

    const [addMoviesData, setAddMoviesData] = useState({category: '', title: '', date: '', description: '', picture: '', video: ''});

    const handleChange = (event) => {
        setAddMoviesData({...addMoviesData, [event.target.title]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.prevendefault();
        axios.post('http://localhost:8080/video', addMoviesData)
          .then(response => {
            console.log(response);
            //SUCCES
          })
          .catch(error => {
            console.log(error);
            //ERROR
          });
    }


  return (
    <Fragment>
      <div className='bgModal'>
        <div className='containerModal'>
          <div className='title'>Ajout d'une oeuvre</div>
          <form action="#" on onSubmit={handleSubmit}>
            <div className='user-details'>
              <div className='gender-details'>
                <input type='radio' name='category' value={addMoviesData.category} onChange={handleChange} id='dot-1'></input>
                <input type='radio' name='category' value={addMoviesData.category} onChange={handleChange} id='dot-2'></input>
                <span className='gender-title'>Catégorie</span>
                <div className='category'>
                  <label for="dot-1">
                    <span className='dot one'></span>
                    <span className='gender'>Films</span>
                  </label>
                  <label for="dot-2">
                    <span className='dot two'></span>
                    <span className='gender'>Séries</span>
                  </label>
                </div>
              </div>
              <div className='input-box'>
                <span className='details'>Titre</span>
                <input type="text" name='title' placeholder='Entrer un titre' value={addMoviesData.title} onChange={handleChange} required></input>
              </div>
              <div className='input-box'>
                <span className='details'>Année</span>
                <input type="text" name='date' placeholder='Entrer une année' value={addMoviesData.date} onChange={handleChange} required></input>
              </div>
              <div className='input-box'>
                <span className='details'>Genre</span>
                <select type="select" required>
                  <option>-</option>
                  <option>Action Aventure</option>
                  <option>Comédie</option>
                  <option>Documentaire</option>
                  <option>Horreur</option>
                  <option>Drame</option>
                  <option>Fantastique</option>
                  <option>Jeunesse</option>
                  <option>Musique et comédies musicales</option>
                  <option>Policier</option>
                  <option>Thriller</option>
                  <option>Science Fiction</option>
                  <option>Romance</option>
                </select>
              </div>
              <div className='input-box'>
                <span className='details'>Genre</span>
                <select type="select" required>
                  <option>-</option>
                  <option>Action Aventure</option>
                  <option>Comédie</option>
                  <option>Documentaire</option>
                  <option>Horreur</option>
                  <option>Drame</option>
                  <option>Fantastique</option>
                  <option>Jeunesse</option>
                  <option>Musique et comédies musicales</option>
                  <option>Policier</option>
                  <option>Thriller</option>
                  <option>Science Fiction</option>
                  <option>Romance</option>
                </select>
              </div>

              <div className='input-box'>
                <span className='details'>Description</span>
                <input className='espaceDesc' name='description' type="text" value={addMoviesData.description} onChange={handleChange} placeholder="Entrer un résumé de l'oeuvre" required></input>
              </div>
              <div className='input-box'>
                <span className='details'>Affiche</span>
                <input name='picture' type="file" value={addMoviesData.picture} onChange={handleChange} required></input>
              </div>
              <div className='input-box'>
                <span className='details'>Lien bande annonce</span>
                <input name='description' type="url" value={addMoviesData.video} onChange={handleChange} placeholder="Url bande annonce" required></input>
              </div>
              <div className='button'>
                <input type="submit" value="Annuler" onClick={() => setIsOpen(false)}></input>
              </div>
              <div className='button'>
                <input type="submit" value="Valider" onClick={() => setIsOpen(false)}></input>
              </div>
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
};


export default AddMovies

