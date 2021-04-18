import React, { useEffect, useState } from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomarSideber';
import PaymentView from './PaymentView';
import ProcessPayment from './ProcessPayment';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/orderCollection")
        .then((res) => res.json())
        .then((data) => {
          setOrderList(data);
        });
    });
    console.log(orderList);
    return (
        <div style={{backgroundColor:'#111430',color:'whitesmoke'}} className="container-fluid row">
            <CustomerSidebar></CustomerSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h1>Antorongo Network</h1> <hr/> <br/>
            <h2>Good Payment, <br/> <span style={{marginLeft: "20px"}}>Good Services !🙂</span></h2><br/>
                <form>
                    <label> <span className=''>Name</span> </label><br/>
                    <input className="form-control form-floating"  Placeholder='Enter Your Name' />
                    <br/>
                    <label>Email</label><br/>
                    <input className="form-floating form-control" type="text" placeholder='Enter Your Email'/>
                    <br/>
                    <label>Address</label><br/>
                    <input className="form-floating form-control" type="text" placeholder='Enter Your Address'/>
                    <br/>
                </form>
                <div>
                    <PaymentView payment={orderList}></PaymentView>
                </div>
                <div>
                    <Elements stripe={stripePromise}>
                        <ProcessPayment></ProcessPayment>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;