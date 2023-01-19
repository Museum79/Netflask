export const SAVE_FILM = "SAVE_FILM" ;

export const SAVE_CATEGORIES = "SAVE_CATEGORIES"

// ici ce sont les actions qu'on veut mettre en place avec le nom de l'action qu'on utilisera dans nos reducers ou middlewares
// et les fonctions avec lesquelles on appelle le nom de l'action et les parametres eventuels qu'on lui passe qui 
// seront utilisés dans les composants ou les middlewares 

export const saveFilms = () => ({ type: SAVE_FILM });

export const saveCategories = () => ({ type: SAVE_CATEGORIES });