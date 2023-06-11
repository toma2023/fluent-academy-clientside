import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
//import './CheckoutForm.css'

const CheckOutForm = ({ selects, refetch, price: payPrice }) => {
    const {id} = useParams();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (payPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: payPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [payPrice, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        } else {
            setCardError('');
            //console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('paymentIntent', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: payPrice,
                date: new Date(),
                classId: id,
                 enrollStudent: selects?.map(item=>item?.enrollStudent),
                seats: selects?.map(item=>item?.seats),
                addItems: selects?.map(item => item?._id),
                selectedItems: selects?.map(item => item?.selectItemId
                ),
                status: 'service pending',
                classImg: selects?.map(item => item?.image),
                instructorNames: selects.map(item => item?.name),
                classNames: selects.map(item => item?.className)
            }

        console.log(payment)

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    refetch();
                    if (res?.data?.result?.insertedId) {
                        // display confirm
                    }
                })
        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p>36227206271667 1245125</p>
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 ml-8">{cardError}</p>
            }
            {transactionId && <p className="text-green-500 ml-8">Transaction complete with transactionId: {transactionId}</p>}

        </>
    );
};


export default CheckOutForm;