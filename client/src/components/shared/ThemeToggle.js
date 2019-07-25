import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default class ThemeToggle extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { toggleTheme } = this.context;
        return(
            <button
                className="btn btn-outline-info my-2 my-sm-0 d-none d-md-inline-block"
                onClick={toggleTheme}
            >
                Theme
            </button>
        );
    }
}