import React from 'react';
import './FunFacts.css';
import Navbar from './Navbar';
import Main from './Main';

export default function FunFacts() {
    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    )
}