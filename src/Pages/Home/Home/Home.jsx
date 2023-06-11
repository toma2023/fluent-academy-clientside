import Awesome from "../../Instructors/Awesome";
import AnimationSection from "../AnimationSection/AnimationSection";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";





const Home = () => {
 

  return (
    <div> 
   
     
      <Banner></Banner>
    
      {/* <PopularClasses></PopularClasses> */}
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <AnimationSection></AnimationSection>
      <Awesome></Awesome>
      
     
    </div>
  );
};

export default Home;