import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAddClass from '../Hooks/useAddClass';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const Classes = () => {
  const [addClass, , refetch] = useAddClass();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const approvedClasses = addClass?.filter((classData) => classData.status === 'approved');

  const handleAddToCart = (classData) => {
    const { _id, seats, name, className, image, price } = classData;

    if (user && user.email) {
      if (seats > 0 && user.role !== 'admin' && user.role !== 'instructor') {
        const selectItem = {
          selectItemId: _id,
          seats,
          name,
          className,
          image,
          price,
          email: user.email,
        };

        fetch('https://fluent-academy-server-toma570.vercel.app/selects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectItem),
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Course added to the Selected Items',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      } else {
        Swal.fire({
          title: 'Cannot Select Course',
          text: 'Please check the availability of seats and your user role.',
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        });
      }
    } else {
      Swal.fire({
        title: 'Please Login to Select the Course',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!',
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
		<div>
			<div
				className='hero min-h-screen'
				style={{
					backgroundImage: `url("https://i.ibb.co/qCGNc5v/ins-cls.webp")`,
				}}
			>
				<div className='hero-overlay bg-opacity-70'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md space-y-7'>
						<h1 className='mb-5 text-5xl font-bold'>
							Celebrating Excellence in Education
						</h1>
						<p className='text-2xl'>
							Recognizing the Best Teacher for Outstanding Impact
							and Dedication
						</p>
						<div className='flex items-center justify-center'>
							<button className='btn btn-outline btn-accent'>
								Give us Call
							</button>
							<p className='ml-5 text-lg'> +034748000</p>
						</div>
					</div>
				</div>
			</div>
			<div className=' max-w-screen-xl mx-auto'>
				<h2 className='  text-5xl text-center font-bold mt-14'>
					Our <span className='text-blue-600'>Classes</span>
				</h2>
				<div className='grid md:grid-cols-3 gap-8 my-14'>
					{approvedClasses?.map(data => (
						<div
							key={data?._id}
							className='grid md:grid-cols-3 gap-8'
						>
							<div
								className={`card w-96 ${
									data?.seats === 0 ? "bg-red" : "bg-base-100"
								} shadow-xl`}
								style={{ opacity: data?.seats === 0 ? 0.7 : 1 }}
							>
								<figure>
									<img
										src={data?.image}
										alt='Class'
									/>
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										{data?.className}
										{data?.seats === 0 && (
											<div className='badge badge-secondary'>
												FULL
											</div>
										)}
									</h2>
									<p>Instructor Name: {data?.name}</p>
									<p>Available seats: {data?.seats}</p>
									<p>Price: $ {data?.price}</p>
									<div className='card-actions justify-end'>
										<button
											onClick={() =>
												handleAddToCart(data)
											}
											disabled={
												data?.seats === 0 ||
												!user ||
												user.role === "admin" ||
												user.role === "instructor"
											}
											className={`btn btn-active ${
												data?.seats === 0 ||
												!user ||
												user.role === "admin" ||
												user.role === "instructor"
													? "btn-disabled"
													: "btn-neutral"
											}`}
										>
											Select
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
  );
};

export default Classes;
