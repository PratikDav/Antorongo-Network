import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSidebar = () => {
    return (
        <div  className="sidebar d-flex flex-column justify-content-between col-sm-6 col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to='/payment'>Payment</Link>
            </li>
            <li>
                <Link to='/bookingList'>Booking List</Link>
            </li>
            <li>
                <Link to='/review'>Review</Link>
            </li>
        </ul>
    </div>
    );
};

export default CustomerSidebar;