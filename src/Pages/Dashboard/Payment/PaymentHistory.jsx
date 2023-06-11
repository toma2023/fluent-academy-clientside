// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const PaymentHistory = () => {
//     const { user } = useContext(AuthContext);
//     const [paymentsHistory, setPaymentsHistory] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`http://localhost:5000/payments/${user.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setPaymentsHistory(data);
//                 })
//                 .catch(error => {
//                     console.error('Error retrieving payment history:', error);
//                 });
//         }
//     }, [user?.email]);

//     return (
//         <div>
//                <h2 className="text-5xl text-center font-bold my-14">My <span className="text-secondary">Payment</span> History</h2>
//             {paymentsHistory.length === 0 ? (
//                 <p>No payment history yet.</p>
//             ) : (
//                 <table className="min-w-full bg-white border border-gray-300">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="py-2 px-4 border-b">Transaction ID</th>
//                             <th className="py-2 px-4 border-b">Date</th>
//                             <th className="py-2 px-4 border-b">Amount</th>
//                             <th className="py-2 px-4 border-b">Email</th>
//                             <th className="py-2 px-4 border-b">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {paymentsHistory.map(payment => (
//                             <tr key={payment._id}>
//                                 <td className="py-2 px-4 border-b">{payment.transactionId}</td>
//                                 <td className="py-2 px-4 border-b">{payment.date}</td>
//                                 <td className="py-2 px-4 border-b">{payment.quantity}</td>
//                                 <td className="py-2 px-4 border-b">{payment.email}</td>
//                                 <td className="py-2 px-4 border-b">{payment.price}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default PaymentHistory;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [paymentsHistory, setPaymentsHistory] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/payments/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // Sort the payment history in descending order based on the date
          const sortedHistory = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setPaymentsHistory(sortedHistory);
        })
        .catch((error) => {
          console.error("Error retrieving payment history:", error);
        });
    }
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl text-center font-bold my-14">My <span className="text-secondary">Payment</span> History</h2>
      {paymentsHistory.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Transaction ID</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Price</th>
            </tr>
          </thead>
          <tbody>
            {paymentsHistory.map((payment) => (
              <tr key={payment._id}>
                <td className="py-2 px-4 border-b">{payment.transactionId}</td>
                <td className="py-2 px-4 border-b">{payment.date}</td>
                <td className="py-2 px-4 border-b">{payment.quantity}</td>
                <td className="py-2 px-4 border-b">{payment.email}</td>
                <td className="py-2 px-4 border-b">{payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment history yet.</p>
      )}
    </div>
  );
};

export default PaymentHistory;

