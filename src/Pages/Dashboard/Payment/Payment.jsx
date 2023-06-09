import { loadStripe } from "@stripe/stripe-js";
import useSelectedCourse from "../../Hooks/useSelectedCourse";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

//pk
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [selects] = useSelectedCourse();
    const total = selects.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
           <h3 className="text-3xl">Payment GateWay Management system by user</h3>
            <Elements stripe={stripePromise}>
              <CheckOutForm selects={selects}  price={price}></CheckOutForm>
            </Elements> 
        </div>
    );
};

export default Payment;