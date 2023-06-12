import { motion } from "framer-motion";

const AnimationSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <div className="my-14">
             <motion.section
                className="bg-blue-500 text-white py-12"
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-6 ml-4">Unlock Your Language Potential</h2>
                    <p className="text-lg mb-8 ml-4">Join Fluent Academy today and embark on a journey to language mastery.</p>
                    <motion.button
                        className="bg-white ml-4 text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.section> 
          
        </div>
    );
};

export default AnimationSection;