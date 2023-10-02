/** @format */

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	return (
		<div>
			<Carousel
				showStatus={false}
				showThumbs={false}
				autoPlay
				infiniteLoop
				min-h-screen
			>
				<div>
					<img
						src='https://i.ibb.co/TTWbxpD/banner1.jpg'
						alt='Banner 1'
					/>
				</div>
				<div>
					<img
						src='https://i.ibb.co/HFtKZm7/banner2.jpg'
						alt='Banner 2'
					/>
				</div>
				<div>
					<img
						src='https://i.ibb.co/s9dg2b3/banner3.jpg'
						alt='Banner 3'
					/>
				</div>
				<div>
					<img
						src='https://i.ibb.co/VJQPVLz/banner4.jpg'
						alt='Banner 4'
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
