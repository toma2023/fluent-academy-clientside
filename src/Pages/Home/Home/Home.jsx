import PopularClasses from "../../PopularClasses/PopularClasses";
import AnimationSection from "../AnimationSection/AnimationSection";
import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <AnimationSection></AnimationSection>
        </div>
    );
};

export default Home;