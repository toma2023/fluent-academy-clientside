import Awesome from "../../Instructors/Awesome";

import AnimationSection from "../AnimationSection/AnimationSection";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ThemeProvider from "../ThemeProvider";



const Home = () => {
 

  return (
    <div> 
      <ThemeProvider>
      <Banner></Banner>
      {/* <PopularClasses></PopularClasses> */}
      <PopularInstructors></PopularInstructors>
      <PopularClasses></PopularClasses>
      <AnimationSection></AnimationSection>
      <Awesome></Awesome>
      </ThemeProvider>

     
    </div>
  );
};

export default Home;