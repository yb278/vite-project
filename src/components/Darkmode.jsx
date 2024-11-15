import React, { useState, useEffect } from 'react';

function Darkmode() {
    // Use state to track the theme
    const [theme, setTheme] = useState('dark');

    // Effect to apply the theme to the body
    useEffect(() => {
        document.body.setAttribute('data-bs-theme', theme);
    }, [theme]);

    return (
        <>
            <div className="mt-3" class ="right_header" >
                <button
                    className="btn btn-primary"
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                    Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>

        </>
    );
}

export default Darkmode;
