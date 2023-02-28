import { saveVideos, DELETE_MOVIES, FETCH_GENRES, FETCH_MOVIES, FETCH_ONE_GENRE, saveGenres, saveOneGenre, UPDATE_MOVIES } from "../actions/moviesActions";
import axios from "axios";

const moviesMiddleware = (store => (next) => (action) => {

    switch (action.type) {
        case FETCH_GENRES: {


            axios.get(`http://localhost:8080/genres`)
                .then(
                    (response) => {
console.log(response)
                        store.dispatch(saveGenres(response.data));
                    }).catch(
                        (error) => console.error(error),
                    );

            next(action);
            break;
        }

        case FETCH_ONE_GENRE: {

            const id = action.genreId

            axios.get(`http://localhost:8080/genre/${id}`)
                .then(
                    (response) => {
                        store.dispatch(saveOneGenre(response.data));
                    }).catch(
                        (error) => console.error(error)
                    );
            next(action);
            break;
        }


        case UPDATE_MOVIES: {

            axios.post('http://localhost:8080/video', action.addMovies)
                .then(
                    (response) => {
                        console.log(response.data);
                    }).catch(
                        (error) => console.error(error),
                    );
            next(action);
            break;
        }


        case FETCH_MOVIES: {
            // Lorsque l'action de type FETCH_MOVIES est déclenchée
            // on appelle une requête GET avec axios pour récupérer toutes les videos.
            axios.get(`http://localhost:8080/videos`)
                .then(
                    // Si la requête réussit, on dispatche une nouvelle action
                    // qui contient les données récupérées (ici saveVideos())
                    (response) => {
                        store.dispatch(saveVideos(response.data));
                        console.log(response)
                    }).catch(
                        (error) => console.error(error),
                    );
            next(action);
            break;
        }


        case DELETE_MOVIES: {

            const id = action.deleteMovies

            axios.delete(`http://localhost:8080/video/${id}`)
                .then(
                    (response) => {
                       console.log(response);
                    }).catch(
                        (error) => console.error(error),
                    );
            next(action);
            break;
        }

        default:
            next(action)
    }
})


export default moviesMiddleware;