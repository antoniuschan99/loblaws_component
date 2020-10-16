import React from 'react'

export const initialState = {
  category: null,
  recipeId: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "category":
      const { payload: category } = action;

      return { ...state, category }
    case "recipeId":
      const { payload: recipeId } = action;

      return { ...state, recipeId }
    default:
      return state
  }
};

export const Context = React.createContext();
