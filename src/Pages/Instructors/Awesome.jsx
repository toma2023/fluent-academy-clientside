import { Fade, Slide } from 'react-awesome-reveal';
import { FiUsers, FiBookOpen, FiCalendar, FiSettings } from 'react-icons/fi';


const Awesome = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-14">
            <Fade triggerOnce>
            <h2 className="text-5xl text-center font-semibold mb-14">Our <span className="text-secondary">Features</span> </h2>
            </Fade>
            <div className="flex flex-wrap justify-center">
                <Slide direction="left" cascade triggerOnce damping={0.1} delay={200}>
                    <div className="flex items-center mb-6 mr-8">
                        <div className="bg-blue-500 rounded-full p-4 mr-4">
                            <FiUsers className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">User Management</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="left" cascade triggerOnce damping={0.1} delay={400}>
                    <div className="flex items-center mb-6 mr-8">
                        <div className="bg-blue-500 rounded-full p-4 mr-4">
                            <FiBookOpen className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Course Library</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="left" cascade triggerOnce damping={0.1} delay={600}>
                    <div className="flex items-center mb-6 mr-8">
                        <div className="bg-blue-500 rounded-full p-4 mr-4">
                            <FiCalendar className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Event Calendar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="left" cascade triggerOnce damping={0.1} delay={800}>
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-500 rounded-full p-4 mr-4">
                            <FiSettings className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Settings</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Awesome;