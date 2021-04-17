import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar';

const ManageService = () => {
    const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderCollection")
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  });
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                
            </div>
        </div>
    );
};

export default ManageService;