import React from 'react';

const HeaderComponent = ({title}) => {
    return ( 
        <nav>
            <div className="nav-wrapper teal darken-4">
                <a href="#!" className="brand-logo"> {title}</a>
            </div>
        </nav>
     );
}
 
export default HeaderComponent;
