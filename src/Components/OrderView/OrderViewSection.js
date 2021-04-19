import React from 'react';
import { Link } from 'react-router-dom';

const OrderViewSection = (props) => {
    const details = props.item
    
    
    const handleOrderNow = props.handleOrderNow;
    


    return (
       <div style={{backgroundColor:'#111430',color:'#111430', height:'900px'}}>
        <div className="card container mt-5 pt-4" style={{width: "18rem",backgroundColor:'#f7da61'}}>
            <img src={details.imageURL} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title fw-bold">{details.name}</h5>
                <p class="card-text fw-bold ">Price: ${details.price}</p>
                <Link to='/bookingList'><button style={{backgroundColor:'#111430',color:'whitesmoke'}} class="btn" onClick={() =>handleOrderNow()}>Order Now</button></Link>
            </div>
        </div>
       </div>
    );
};

export default OrderViewSection;