import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;


// ici c'est le reducer principal qui sert à combiner tous les reducers qu'on souhaite utiliser 

