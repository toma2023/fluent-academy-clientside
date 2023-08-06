import Questions from "../../../Questions";
import Review from "../../../Review";
import Subscribe from "../../../Subscribe";
import Awesome from "../../Instructors/Awesome";
import AnimationSection from "../AnimationSection/AnimationSection";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {

  return (
    <div> 
   
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <AnimationSection></AnimationSection>
      <Awesome></Awesome>
      <Review></Review>
      <Subscribe></Subscribe>
      <Questions></Questions>
    </div>
  );
};

export default Home;