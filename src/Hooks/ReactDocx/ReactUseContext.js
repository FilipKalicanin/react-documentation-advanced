import React, { useContext, useState } from 'react';

// Component calling useContext will always re-render when context value changes.

// useContext(MyContext) only lets you read the context and subscribe to its changes
// you still need <MyContext.Provider> above in the tree to provide values for this context

// Here we create theme and ThemeContext where we assign value to be passed
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

// Here we call component toolbar wich also calls another component that may be useing context value
// <ThemeContext.Provider> will pass the value of context that we need
export default function App() {

    const [theme, setTheme] = useState(themes.light);

    function toggleTheme() {
        theme === themes.light ?
        setTheme(themes.dark) :
        setTheme(themes.light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemmedButton />
        </div>
    )
}

function ThemmedButton() {
    const context = useContext(ThemeContext);

    return (
        <>
        {console.log(context)}
        <button
            style={{
                background: context.theme.background,
                color: context.theme.foreground
            }}
            onClick={context.toggleTheme}
        >
            I am styled by theme context!
        </button>
        </>

    )
}