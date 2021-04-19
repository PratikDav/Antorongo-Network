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

  const handleDelete = (event, id) => {
        fetch(`http://localhost:5000/ordersCollection/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                event.target.parentNode.style.display = 'none';
            }
        })
  }

    return (
        <div className="container-fluid row" style={{backgroundColor:'#111430'}}>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <div>
                    <div style={{backgroundColor:'#fbdf69'}} className="container">
                        <div  className="row text-white p-2 pt-3 mb-3 rounded">
                        <div className="d-flex  justify-content-center col-3 ">
                            <h4 className="fw-bold" style={{color:'#111430'}}>Services</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3">
                            <h4 className="fw-bold" style={{color:'#111430'}}>Price</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3">
                            <h4 className="fw-bold" style={{color:'#111430'}}>Customer Email</h4>
                        </div>
                        <div className="d-flex  justify-content-center col-3 ">
                            <h4 className="fw-bold" style={{color:'#111430',marginRight:'110px'}}>Method</h4>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:'80px'}}>
                {orderList.map((item) => (
                    <ShowOrder item={item} key={item._id} handleDelete={handleDelete}></ShowOrder>
                ))
                }
                </div>
            </div>
        </div>
    );
};

export default ManageService;