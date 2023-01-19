import { SAVE_FILM, SAVE_CATEGORIES } from "../actions/moviesActions";
import movies from "../data/index";
import categories from "../data/cats";


export const initialState = {
    movies: [],
    categories: [] 
}


export const moviesReducer = (state = initialState, action = {}) => {

switch(action.type) {
    
// ici c'est le reducer movies que l'on va utiliser par exemple pour charger toutes les films dans le state,
// si l'action qu'on appelle est SaveFilms, on va modifier le state de movies qui est initialement un tableau vide pour retourner tous les films

case SAVE_FILM: 
    return {
        ...state,
        movies: movies
    };



    case SAVE_CATEGORIES: 
    return {
        ...state,
        categories: categories
    }



    default: 
    return state;
}


};