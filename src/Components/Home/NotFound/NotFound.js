import React from 'react';
import NotFoundNet from '../../../image/NotFound.gif'

const NotFound = () => {
    return (
        <div className="container">
           <div className="mt-5 ms-5">
           <h1>Antogongo Network</h1>
            <img style={{ height:'900px',marginLeft:'100px'}} src={NotFoundNet} alt=""/>
           </div>
        </div>
    );
};

export default NotFound;