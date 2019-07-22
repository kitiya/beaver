import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { textcolor: '#555', uicolor: '#ddd', bgcolor: '#eee' },
        dark: { textcolor: '#ddd', uicolor: '#333', bgcolor: '#555' }
    };

    toggleTheme = () => {
        this.setState((prevState, props) => {
            return {isLightTheme: !prevState.isLightTheme};
        });
    };

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}