import CheckoutHeader from "checkoutHeader";
import ReviewAndPay from "reviewAndPay";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function Checkout() {
    const stripePromise = loadStripe("your_stripe_public_key_here");

    return (
        <div className="Checkout
        w-full h-44">
            <CheckoutHeader />
            <Elements stripe={stripePromise}>
                <ReviewAndPay />
            </Elements>
        </div>
    );
}

export default Checkout;
