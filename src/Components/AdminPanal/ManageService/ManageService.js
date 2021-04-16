import React from 'react';
import Sidebar from '../SideBar/Sidebar';

const ManageService = () => {
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h1>This is Manage Services</h1>
            </div>
        </div>
    );
};

export default ManageService;