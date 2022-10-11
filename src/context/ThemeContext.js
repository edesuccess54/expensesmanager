import {createContext, useReducer } from "react"

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAVBAR_COLOR":
            return {...state, color: action.payload}

        case "CHANGE_BACKGROUND":
            return {...state, mode: action.payload}

        default: 
            return state
    }
}

const initialState = {
    color: 'purple',
    mode: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const changeColor = (color) => {
        dispatch({type: "CHANGE_NAVBAR_COLOR", payload: color})
    }

    const changeMode = (mode) => {
        dispatch({type: "CHANGE_BACKGROUND", payload: mode})
        console.log(mode)
    }

  return (
    <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}