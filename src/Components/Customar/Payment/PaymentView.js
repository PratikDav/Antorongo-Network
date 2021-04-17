import React from 'react';



const PaymentView = props => {
    const payment = props.payment
    

    let amount = 0;
    for(let i = 0; i < payment.length; i++) {
        let soloPayment = payment[i];
        const order = soloPayment.order
        for(let j = 0; j < order.length; j++) {
            const soloAmount = order[j];
            amount = amount + soloAmount.price
        }
    }
   
    return (
        <div>
            <h6 className=''>Total Orders: {payment.length}</h6>
            <h6>Amount To Be Paid: ${amount}</h6>
        </div>
    );
};

export default PaymentView;