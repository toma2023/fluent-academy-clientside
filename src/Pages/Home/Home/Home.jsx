import Questions from "../../../Questions";
import Review from "../../../Review";
import Subscribe from "../../../Subscribe";
import Awesome from "../../Instructors/Awesome";
import AnimationSection from "../AnimationSection/AnimationSection";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
 const dynamicClass = "max-w-screen-xl mx-auto";
  return (
		<div>
			<Banner />
			<PopularInstructors />
			<div className={dynamicClass}>
				<PopularClasses />
			</div>
			<AnimationSection />
			<div className={dynamicClass}>
				<Awesome />
				<Review />
			</div>

			<Subscribe />
			<div className={dynamicClass}>
				<Questions />
			</div>
		</div>
  );
};

export default Home;