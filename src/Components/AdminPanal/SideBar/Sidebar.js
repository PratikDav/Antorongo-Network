import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

const Sidebar = () => {
    return (
        <div  className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to='/admin'>Admin</Link>
                </li>
                <li>
                    <Link to='/orderList'>Order List</Link>
                </li>
                <li>
                    <Link to='/makeAdmin'>Make Admin</Link>
                </li>
                <li>
                    <Link to='/manageServices'>Manage Services</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;