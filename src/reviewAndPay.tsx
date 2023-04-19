import React, { useContext } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StateContext } from 'StateProvider';
import 'reviewAndPay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { ActionTypes } from 'action';
import { useEffect } from 'react';



function CheckoutBody() {
    // const stripe = useStripe();
    // const elements = useElements();
    const { state, dispatch } = useContext(StateContext);
    const chooseMethod = (method: string) => {
        if (method === 'delivery') {
            dispatch({ type: ActionTypes.SET_METHOD, payload: true })
            document.querySelector(".checkout_info")
                ?.classList
                .add("deliverySet")
        }
        else {
            dispatch({ type: ActionTypes.SET_METHOD, payload: false })
            document.querySelector(".checkout_info")
                ?.classList
                .remove("deliverySet")
        }
    }

    useEffect(() => {
        chooseMethod("pickup");
    }, []);
    // Handle form submission and payment processing here

    return (
        <div className="checkout_info
        m-0 flex flex-col flex-wrap sm:flex-col 
        md:flex-col md:flex-nowrap lg:flex-row 
        lg:h-screen">
            <div className='payment_container'>
                <h1>Payment Details</h1>
                <div className='pick_or_deli
                flex gap-12 mb-5'>
                    <button onClick={() => chooseMethod("delivery")} className={`delivery basis-1/2
                    border-2  px-2 py-3 rounded-md
                    hover:outline-2 hover:outline-red-500 
                    hover:outline transition-all
                    active:outline-offset-0 active:border-red-500
                    ${state.isDelivery ?
                            `outline outline-2 outline-red-500 
                    outline-offset-0 text-red-500
                    border-red-500`: `border-slate-400 hover:outline-offset-2`} `}>
                        <FontAwesomeIcon className='mr-8'
                            icon={faPersonBiking} />
                        <span>Delivery</span>
                    </button>
                    <button onClick={() => chooseMethod("pickup")} className={`delivery basis-1/2
                    border-2  px-2 py-3 rounded-md
                    hover:outline-2 hover:outline-red-500 hover:outline
                    active:outline-offset-0 active:border-red-500 transition-all
                    ${!state.isDelivery ?
                            `outline outline-2 outline-red-500 
                    outline-offset-0 text-red-500
                    border-red-500`: `border-slate-400 hover:outline-offset-2`} `}>
                        <FontAwesomeIcon className='mr-8'
                            icon={faPeopleCarryBox} />

                        <span>Pickup</span>
                    </button>
                </div>
                <label>
                    Name <span className='text-red-600'>*</span>
                    <input className='' placeholder='Joe Marinara' required>

                    </input>
                </label>

                <label>
                    Card number <span className='text-red-600'>*</span>
                    <CardNumberElement className='ce' />
                </label>
                <label>
                    Expiration date <span className='text-red-600'>*</span>
                    <CardExpiryElement className='ce' />
                </label>
                <label>
                    CVC <span className='text-red-600'>*</span>
                    <CardCvcElement className='ce' />
                </label>
            </div>
            <div className='delivery_info
            border-t-2 border-t-red-500 sm:border-t-0'>
                <h1>Delivery Information</h1>
                <label>
                    Phone Number <span className='text-red-600'>*</span>
                    <input className='' placeholder='(123) 456-7890' required>

                    </input>
                </label>
                <label>
                    Borough <span className='text-red-600'>*</span>
                    <input className='w-full' placeholder='Brooklyn' required>

                    </input>
                </label>
                <label>
                    Street Name <span className='text-red-600'>*</span>
                    <input className='' placeholder='Pizza Avenue' required>

                    </input>
                </label>
                <label>
                    Building Number <span className='text-red-600'>*</span>
                    <input className='' placeholder='Pizza Avenue' required>

                    </input>
                </label>
                <label>
                    Zip Code <span className='text-red-600'>*</span>
                    <input className='w-full' placeholder='Brooklyn' required>

                    </input>
                </label>

            </div>

            <div className='order_summary
  md:border-l-0 md:border-t-0
  border-red-500 border-2 border-b-0 border-l-0
  p-4'>
                <h1 className='font-bold text-2xl mb-4'>Order Summary</h1>
                <ul className='orders space-y-2'>
                    <li className='bg-red-100'>
                        <div className='flex justify-between p-2'>
                            <span>ItemName x 3</span>
                            <span>$1.24/pc.</span>
                        </div>
                    </li>
                    <li className='bg-gray-100'>
                        <div className='flex justify-between p-2'>
                            <span>ItemName x 3</span>
                            <span>$1.24/pc.</span>
                        </div>
                    </li>
                    <li className='bg-red-100'>
                        <div className='flex justify-between p-2'>
                            <span>ItemName x 3</span>
                            <span>$1.24/pc.</span>
                        </div>
                    </li>
                </ul>
                <div className='totals mt-6'>
                    <div className='subtotal flex justify-between'>
                        <span>Subtotal:</span>
                        <span>$0.00</span>
                    </div>
                    <div className='tax flex justify-between'>
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </div>
                    <hr className='border-red-500 my-2' />
                    <div className='total flex justify-between font-bold text-red-600 text-xl'>
                        <span>Total:</span>
                        <span>$0.00</span>
                    </div>
                </div>
                <button type='submit' className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 w-full'>
                    Pay {state.shoppingCart.reduce((prev, curr) =>
                        (prev + curr.count * curr.price), 0)}
                </button>
            </div>

        </div>
    );
}

function ReviewAndPay() {
    const stripePromise = loadStripe('your_stripe_public_key_here');

    return (
        <div className="reviewAndPay">
            <Elements stripe={stripePromise}>
                <CheckoutBody />
            </Elements>
            {/* Add your order summary container here */}
        </div>
    );
}

export default ReviewAndPay;
