import { createStore, applyMiddleware, compose } from "redux";


// Store REDUX, il permet de stocker toutes les données de l'application dans un seul endroit 
//et de les mettre à jours en fonction des actions déclenchés par les utilisateurs ou les composants.


import reducer from "../reducers"



const store = createStore(reducer);

export default store;