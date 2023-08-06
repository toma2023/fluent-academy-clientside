import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200 });
  }, []);

  useEffect(() => {
    fetch("https://fluent-academy-server-toma570.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const instructorUsers = data.filter(
          (user) => user.role === "instructor"
        );
        setInstructors(instructorUsers.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <section
        className="wonderful-section my-14 bg-gray-100 py-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto">
          <h2 className="md:text-5xl text-center font-bold mb-8">
            Our <span className="text-blue-600">Popular Instructors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor?._id}
                className="wonderful-item bg-white p-8 rounded-lg shadow-lg"
                data-aos="zoom-in"
              >
                <img
                  src={instructor?.photo}
                  alt="Instructor"
                  className="wonderful-image mx-auto mb-4"
                />
                <div className="wonderful-details text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {instructor?.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{instructor?.email}</p>
                  <a href="#" className="btn btn-primary">
                 Contact 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularInstructors;

