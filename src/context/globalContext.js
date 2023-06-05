import React from "react";

export const globalState = {
    logado: false,
    key: null,
}

export const globalContext = React.createContext(globalState);

export const reducer = (state, action) => {
    switch(action.type){
        case 'autentication':
            return {...state, logado: true,key: action.payload};

        default:
            return{...state};
    }
    
}