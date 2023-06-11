import { loadStripe } from "@stripe/stripe-js";
//import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedCourse from "../../Hooks/useSelectedCourse";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = ({ p }) => {
    const [selects, refetch] = useSelectedCourse()
    const { price } = p
console.log(selects)

   const payPrice = parseFloat(price.toFixed(2))

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm refetch={refetch} selects={selects} price={payPrice}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Pay;