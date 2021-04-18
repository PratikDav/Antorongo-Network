import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const ProcessPayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form className="card container" onSubmit={handleSubmit}>
      <CardElement style={{width:'100px'}} className='mt-3' />
      <button style={{width: '60px',backgroundColor:'#111430',color:'whitesmoke',border:'none'}} className="rounded text-center mt-4 mb-4" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default ProcessPayment;