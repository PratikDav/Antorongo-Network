import React from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomarSideber';

const Review = () => {
    return (
       
        <div className="container-fluid row">
            <CustomerSidebar></CustomerSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h1>This is Review</h1>
            </div>
        </div>
        
    );
};

export default Review;