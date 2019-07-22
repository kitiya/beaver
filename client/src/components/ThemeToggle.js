import React from 'react';
import { ThemeContext } from '../contexts/theme-context/ThemeContext';

export default class ThemeToggle extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { toggleTheme } = this.context;
        return(
            <button
                className="btn btn-outline-info my-2 my-sm-0"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        );
    }
}