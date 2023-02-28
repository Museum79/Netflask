import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers"
import moviesMiddleware from "../middlewares/moviesMiddleware";



// Store REDUX, il permet de stocker toutes les données de l'application dans un seul endroit 
//et de les mettre à jours en fonction des actions déclenchés par les utilisateurs ou les composants.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [moviesMiddleware];

const enhancers= composeEnhancers( applyMiddleware (...middlewares))

const store = createStore(reducer, enhancers);

export default store;

