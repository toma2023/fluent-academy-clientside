import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://fluent-academy-server-toma570.vercel.app/payments/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setEnrollments(data);
                })
                .catch(error => {
                    console.error('Error retrieving enrolled classes:', error);
                });
        }
    }, [user?.email]);

    return (
        <>
            <div className="my-14">
                <h2 className="text-5xl text-center font-bold mb-8"><span className="text-secondary">My Enrolled</span> Classes</h2>
                {enrollments?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-8">
                        {enrollments?.map(enrollment => (
                            <div key={enrollment?._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={enrollment?.classImg[0]} alt="Class" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{enrollment?.classNames[0]}</h2>
                                    <p>Email: {enrollment?.email}</p>
                                    <p>Transaction ID: {enrollment?.transactionId}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Enrolled</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-600 text-xl font-semibold">Opps! Sorry,No enrolled classes yet.</p>
                )}
            </div>

        </>

    );
};

export default MyEnrolledClasses;
