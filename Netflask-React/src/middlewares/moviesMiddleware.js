import { FETCH_GENRES, FETCH_ONE_GENRE, saveGenres, saveOneGenre } from "../actions/moviesActions";
import axios from "axios";

const moviesMiddleware = (store => (next) => (action) => {

    switch (action.type) {
        case FETCH_GENRES: {

            axios.get(`http://localhost:8080/genres`)
            .then ( 
            (response) =>{
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
            .then (
                (response) => {
                    store.dispatch(saveOneGenre(response.data));
                }).catch(
                    (error) => console.error(error)
                );


            next(action);
            break;


        }


      

        default:
            next(action)
    }


})

export default moviesMiddleware;