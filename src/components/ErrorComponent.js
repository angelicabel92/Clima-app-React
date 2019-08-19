import React from 'react';

const ErrorComponent = ({message}) => {
    return ( 
        <div className="card-panel red darken-4 error col s12">
            {message}
        </div>
     );
}
 
export default ErrorComponent;
