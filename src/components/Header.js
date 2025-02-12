import React from 'react';

const Header = () => {
    const userName = 'Sarah';

        return (
            <header>
               <h1>Welcome <u className="header-red">{userName}</u> to the CodeCraft Labs Intranet </h1>
            </header>
        );
    };

 

export default Header;
