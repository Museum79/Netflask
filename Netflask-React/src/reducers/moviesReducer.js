import { FILTER_CATEGORY, SAVE_GENRES, SAVE_ONE_GENRE, UNFLITRE_GENRE } from "../actions/moviesActions";



export const initialState = {
    genresAndVideos: [],
    selectedGenre: {},
    categorySelected: ""

}


export const moviesReducer = (state = initialState, action = {}) => {

switch(action.type) {
    
// ici c'est le reducer movies que l'on va utiliser par exemple pour charger toutes les films dans le state,
// si l'action qu'on appelle est SaveFilms, on va modifier le state de movies qui est initialement un tableau vide pour retourner tous les films

case SAVE_GENRES: 
    return {
        ...state,
        genresAndVideos: action.genreWithVideos
    };

  
 case SAVE_ONE_GENRE:
    return{
        ...state,
        selectedGenre: action.genre
    };
    
case FILTER_CATEGORY:
    return{
        ...state,
        categorySelected: action.value
    };


case UNFLITRE_GENRE:
    return{
        ...state,
        selectedGenre: {}
    }    





    default: 
    return state;
}


};