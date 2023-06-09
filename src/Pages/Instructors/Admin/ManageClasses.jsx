// import { useState, useEffect } from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
//import Swal from 'sweetalert2';

import useAddClass from "../../Hooks/useAddClass";



const ManageClasses = () => {
  //   const [classes, setClasses] = useState([]);
  // const [axiosSecure] = useAxiosSecure();

  // Fetch the classes from the database
  // useEffect(() => {
  //   axiosSecure.get('/addClass')
  //     .then(response => {
  //       setClasses(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [axiosSecure]);

  // Update the status of a class
  const [addClass, ,refetch] = useAddClass();


  const updateClassStatus = (id, status ) => {
    console.log(status, id);
    fetch(`http://localhost:5000/addClass/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };



  // Send feedback to the instructor
  const sendFeedback = (classId, feedback) => {
    // You can implement the logic to send feedback to the instructor here
    // This can be done via an API call or any other method based on your backend setup
    // You can display a modal or use a separate page to send feedback to the instructor
    console.log(`Sending feedback for class ${classId}: ${feedback}`);
  };

  return (
    <div>
      <h2 className="text-4xl">Manage Classes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class Image
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instructor Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instructor Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Available Seats
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {addClass.map(cls => (
            <tr key={cls?._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={cls?.image} alt="Class" className="h-12 w-12 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls?.className}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls.seats}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {cls.status == "approved" && <span>Approved</span>}
                {cls.status == "pending" && <span>Pending</span>}
                {cls.status == "denied" && <span>Denied</span>}
              </td>
              <td className="px-6 py-4  whitespace-nowrap">
                {cls.status === 'pending' && (
                  <div>
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded"
                      onClick={() => updateClassStatus(cls._id, 'approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded ml-2"
                      onClick={() => updateClassStatus(cls._id, 'denied')}
                    >
                      Deny
                    </button>
                  </div>
                )}
                {cls.status === 'approved' && (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => sendFeedback(cls._id, 'Your class has been approved.')}
                  >
                    Send Feedback
                  </button>
                )}
                {cls.status === 'denied' && (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => sendFeedback(cls._id, 'Your class has been denied due to incomplete information.')}
                  >
                    Send Feedback
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;