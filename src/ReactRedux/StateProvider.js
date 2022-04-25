import React, { Component, createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* {console.log(reducer)} */}
        {/* ini App */}
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)
