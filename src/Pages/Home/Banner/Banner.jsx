import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../../public/images/banner1.jpg'
import img2 from '../../../../public/images/banner2.jpg'
import img3 from '../../../../public/images/banner3.jpg'
import img4 from '../../../../public/images/banner4.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>



        </>

    );
};

export default Banner;