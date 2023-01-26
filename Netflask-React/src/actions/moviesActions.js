export const SAVE_FILM = "SAVE_FILM" ;

export const SAVE_GENRES = "SAVE_GENRES" ;

export const FETCH_GENRES = "FETCH_GENRES";

export const FETCH_ONE_GENRE = "FETCH_ONE_GENRE";

export const SAVE_ONE_GENRE = "SAVE_ONE_GENRE";

export const FILTER_CATEGORY = "FILTER_CATEGORY";

export const UNFILTRE_GENRE = "UNFILTRE_CATEGORY";




// ici ce sont les actions qu'on veut mettre en place avec le nom de l'action qu'on utilisera dans nos reducers ou middlewares
// et les fonctions avec lesquelles on appelle le nom de l'action et les parametres eventuels qu'on lui passe qui 
// seront utilisés dans les composants ou les middlewares 

export const saveGenres = (genreWithVideos) => (
    { 
        type: SAVE_GENRES,
        genreWithVideos 
    });

export const fetchGenres = () => ({ type: FETCH_GENRES });

export const fetchOneGenre = (genreId) => (
    {
     type: FETCH_ONE_GENRE,
     genreId
    })

export const saveOneGenre = (genre) => (
    {
        type: SAVE_ONE_GENRE,
        genre
    }
)

export const filterCategory = (value) => (
    {
        type: FILTER_CATEGORY,
        value
    }
)

export const unFiltreGenre = () => ({ type: UNFILTRE_GENRE });