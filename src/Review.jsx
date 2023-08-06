
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";


const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('../public/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
   

    return (
        <div className="mx-auto">
            <h2 className="md:text-5xl text-center font-semibold mb-6">
            Customers <span className="text-blue-600"> Review</span>
          </h2>
            <section>
                <section className="my-10">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className="m-12 flex flex-col items-center mx-24 my-16">

                                    <img className="w-72 h-50 rounded-[50%]" src={review.picture} alt="" />
                                    <h3 className="text-2xl mt-4 font-semibold text-blue-600"> {review.name} </h3>
                                    <p className="py-2"> {review.comment} </p>

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>


                            </SwiperSlide>)
                        }
                    </Swiper>
                </section>
            </section>
        </div>
    );
};

export default Review;