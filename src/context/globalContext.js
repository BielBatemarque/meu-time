import React, { useReducer } from "react";

export const globalState = {
    logado: false,
    key: null,
}

export const globalContext = React.createContext(globalState);

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    return(
        <globalContext.Provider value={{ state, dispatch }}>{children}</globalContext.Provider>
    )
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'autentication':
            return {...state, logado: true, key: action.payload};
        
        case 'logout':
            return {...state, logado: false, key: null};

        default:
            return{...state};
    }
}