import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
   
    lightTheme: () => {},
    darkTheme: () => {},
})


export const ThemeProvider= ThemeContext.Provider

//create custome hook: useTheme

export default function useTheme(){
    return useContext(ThemeContext)
}