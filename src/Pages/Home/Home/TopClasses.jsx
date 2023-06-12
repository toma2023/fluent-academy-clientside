import  { useState, useEffect } from "react";

function TopClasses() {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    fetch("/topClass?limit=6&sortBy=enrollStudent")
      .then((response) => response.json())
      .then((data) => setTopClasses(data))
      .catch((error) => console.error("Error fetching top classes:", error));
  }, []);

console.log(topClasses)

  return (
    <div>
      <h2>Top Classes</h2>
      <ul>
        {topClasses.map((classItem) => (
          <li key={classItem._id}>
            <h3>{classItem.className}</h3>
            <p>Enrolled Students: {classItem.enrollStudent}</p>
            <img src={classItem.image} alt={classItem.className} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopClasses;
