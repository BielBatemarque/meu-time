import React from "react";

export const globalState = {
    logado: false,
}

export const globalContext = React.createContext(globalState);

