import React, { useEffect, useState } from 'react';
import CustomerSidebar from '../CustomerSidebar/CustomarSideber';
import PaymentView from './PaymentView';
import ProcessPayment from './ProcessPayment';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('sk_test_51IekfqElAzGxIuby0ba3ReSf2b0qvgkkxmVbPEEYQ1zfVqzlpGE3jlWNxWFQqgal7t3Acz6prs2kZc5JF7uBVd3U00InqEd7Db');

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
        <div className="container-fluid row">
            <CustomerSidebar></CustomerSidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h1>Antorongo Network</h1><br/>
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
                    {/* <MyCheckoutForm /> */}
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;