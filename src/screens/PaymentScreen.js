import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {

  const [paymentMethod, setPaymentMethod] = useState('');
  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({paymentMethod}));
    props.history.push('placeorder')
  }
  return <div>
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
    <div className="payment form">
      <form onSubmit={submitHandler} >
        <h2>Payment</h2>
        <ul className="payment form-container">
          <li>
            <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)}>
            </input>
            <label htmlFor="address">
              Paypal
            </label>
          </li>
          <li>
            <input type="radio" name="paymentMethod" id="paymentMethod" value="gpay" onChange={(e) => setPaymentMethod(e.target.value)}>
            </input>
            <label htmlFor="address">
              Gpay
            </label>
          </li>
          <li>
            <input type="radio" name="paymentMethod" id="paymentMethod" value="paytm" onChange={(e) => setPaymentMethod(e.target.value)}>
            </input>
            <label htmlFor="address">
              PayTm
            </label>
          </li>
          <li>
            <input type="radio" name="paymentMethod" id="paymentMethod" value="cash" onChange={(e) => setPaymentMethod(e.target.value)}>
            </input>
            <label htmlFor="address">
              Cash on delivery
            </label>
          </li>
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
}
export default PaymentScreen;