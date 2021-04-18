import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import ViewOrderList from "./ViewOrderList";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderCollection")
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  });
  return (
    <div className="container-fluid row"style={{backgroundColor:'#111430'}}>
      <Sidebar></Sidebar>

      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0 }}
      >
        <div>
          <div className="container">
            <div style={{backgroundColor:'#fbdf69'}} className="row text-white p-2 pt-3 mb-3 rounded">
              <div className="d-flex  justify-content-center col-3">
                <h4 className="fw-bold" style={{color:'#111430'}}>Services</h4>
              </div>
              <div className="d-flex   justify-content-center col-3">
                <h4 className="fw-bold" style={{color:'#111430'}}>Price</h4>
              </div>
              <div className="d-flex  justify-content-center col-3 mx-2">
                <h4 className="fw-bold" style={{color:'#111430'}}>Customer Email</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          {orderList.map((item) => (
            <ViewOrderList item={item} key={item._id}></ViewOrderList>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default OrderList;
