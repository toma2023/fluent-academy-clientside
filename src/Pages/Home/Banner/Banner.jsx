import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/TTWbxpD/banner1.jpg" />
                  
                </div>
                <div>
                    <img src="https://i.ibb.co/HFtKZm7/banner2.jpg" />
                   
                </div>
                <div>
                    <img src="https://i.ibb.co/s9dg2b3/banner3.jpg" />
                   
                </div>
                <div>
                    <img src="https://i.ibb.co/VJQPVLz/banner4.jpg" />
                 
                </div>
            </Carousel>



        </>

    );
};

export default Banner;