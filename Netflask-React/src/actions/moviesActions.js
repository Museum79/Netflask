export const SAVE_GENRES     = "SAVE_GENRES";

export const FETCH_GENRES    = "FETCH_GENRES";

export const FETCH_ONE_GENRE = "FETCH_ONE_GENRE";

export const SAVE_ONE_GENRE  = "SAVE_ONE_GENRE";

export const FILTER_CATEGORY = "FILTER_CATEGORY";

export const UNFILTRE_GENRE  = "UNFILTRE_CATEGORY";

export const UPDATE_MOVIES   = "UPDATE_MOVIES";

export const FETCH_MOVIES    = "FETCH_MOVIES";

export const DELETE_MOVIES   = "DELETE_MOVIES";

export const SAVE_VIDEOS     = "SAVE_VIDEOS";

// ici ce sont les actions qu'on veut mettre en place avec le nom de l'action qu'on utilisera dans nos reducers ou middlewares
// et les fonctions avec lesquelles on appelle le nom de l'action et les parametres eventuels qu'on lui passe qui 
// seront utilisés dans les composants ou les middlewares 

export const saveGenres     = (genreWithVideos) => ({ type: SAVE_GENRES, genreWithVideos });

export const fetchGenres    = () => ({ type: FETCH_GENRES });

export const fetchOneGenre  = (genreId) => ({ type: FETCH_ONE_GENRE, genreId })

export const saveOneGenre   = (genre) => ({ type: SAVE_ONE_GENRE, genre })

export const filterCategory = (value) => ({ type: FILTER_CATEGORY, value })

export const unFiltreGenre  = () => ({ type: UNFILTRE_GENRE });

export const update_movies   = (addMovies) => ({ type: UPDATE_MOVIES,addMovies })

export const fetchMovies    = () => ({ type: FETCH_MOVIES});

export const deleteMovies   = (deleteMovies) => ({ type: DELETE_MOVIES, deleteMovies});

export const saveVideos    = (videos) => ({ type: SAVE_VIDEOS, videos})
