import { createContext } from "react";

const ThemeContext = createContext(); // default value = undefined
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;