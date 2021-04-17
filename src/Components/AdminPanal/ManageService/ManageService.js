import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar';
import ShowOrder from './ShowOrder';

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
                <div>
                    <div className="container">
                        <div className="row bg-dark   text-white p-2 pt-3 mb-3 rounded">
                        <div className="d-flex  justify-content-center col-3">
                            <h4>Services</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3">
                            <h4>Price</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3">
                            <h4>Customer Email</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3">
                            <h4>Method</h4>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                {orderList.map((item) => (
                    <ShowOrder item={item} key={item._id}></ShowOrder>
                ))
                }
                </div>
            </div>
        </div>
    );
};

export default ManageService;