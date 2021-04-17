import React from 'react';
import './Viewdata.css'

const ViewData = props => {
    const data = props.data
    const{name, price} = data
    const order = props.order
    console.log(order)
    return (
        <div>
        <div className="container">
           <div className="row  text-white p-2 pt-3 mb-3 rounded">
               <div className="d-flex table-info text-black justify-content-center col-3">
                   <h4>{name}</h4>
               </div>
               <div className="d-flex table-info text-black justify-content-center col-3">
                   <h4>{price}</h4>
               </div>
               <div className="d-flex table-info text-black justify-content-center col-3">
                    <h4>{order.email}</h4>
               </div>
           </div>
       </div>
   </div>
    );
};

export default ViewData;