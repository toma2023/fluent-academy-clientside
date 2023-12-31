import useAddClass from "../../Hooks/useAddClass";
import Swal from "sweetalert2";
import axios from "axios";

const ManageClasses = () => {
  const [addClass, , refetch] = useAddClass();
  const updateClassStatus = (id, status) => {
    console.log(status, id);
    fetch(`https://fluent-academy-server-toma570.vercel.app/addClass/${id}`, {
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
  const sendFeedback = async (id) => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      axios.put(`https://fluent-academy-server-toma570.vercel.app/addFeedback/${id}`, { feedback: text })
        .then(res => console.log(res.data))
      Swal.fire(text)
    }
  };

  return (
    <div className="my-14">
      <h2 className="text-5xl ml-16 font-semibold mb-8"><span className="text-secondary">Manage</span> Classes</h2>
      <div className="overflow-x-auto ">
        <table className="table  divide-gray-200">
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
                    onClick={() => sendFeedback(cls._id)}
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
    </div>
  );
};

export default ManageClasses;