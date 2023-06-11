import useSelectedCourse from "../../Hooks/useSelectedCourse";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pay from "./Pay";


const Payment = () => {
    const { id } = useParams()
    const [selects] = useSelectedCourse()
    const [paymentData, setPaymentData] = useState([])
   
    useEffect(() => {
        if (selects) {
            const payData = selects?.filter(data => data?._id === id)
            setPaymentData(payData);
        }
    }, [selects, id])


    return (
        <div>
            <h3 className="text-3xl font-semibold">Payment GateWay Management system by user</h3>
            {paymentData?.map(p => <Pay key={p._id} p={p} ></Pay>)

            }

        </div>
    );
};

export default Payment;