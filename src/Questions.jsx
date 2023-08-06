import { BsArrowRight } from "react-icons/bs";


const Questions = () => {
    return (
        <div className='grid grid-cols-2 gap-3 my-16'>
            <div>
                <h2 className="text-5xl font-semibold"><span className="text-blue-600">Popular Questions</span> About our
                    Language Courses</h2>

                <div className="mt-10">
                    <div tabIndex={0} className="collapse bg-primary text-primary-content  focus:text-white">
                        <div className="collapse-title">
                            Is it possible to pay for an order with Visa and MasterCard payment cards?
                        </div>
                        <div className="collapse-content">
                            <div>
                                <p>1. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</p>
                                <br />
                                <p>2. Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</p> <br />
                                <p>3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className=" mt-5 collapse bg-primary text-primary-content  focus:text-white">
                        <div className="collapse-title">
                            Is it possible to pay by credit card?
                        </div>
                        <div className="collapse-content">
                            <div>
                                <p>1.Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</p>
                                <br />
                                <p>2. Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</p> <br />
                                <p>3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</p>
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className=" mt-5 collapse bg-primary text-primary-content  focus:text-white">
                        <div className="collapse-title">
                            What payment methods exist in your company?
                        </div>
                        <div className="collapse-content">
                            <div>
                                <p>1. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</p>
                                <br />
                                <p>2. Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</p> <br />
                                <p>3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</p>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={0} className=" mt-5 collapse bg-primary text-primary-content  focus:text-white">
                        <div className="collapse-title">
                            Can I return the course after purchase?
                        </div>
                        <div className="collapse-content">
                            <div>
                                <p>1. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis.</p>
                                <br />
                                <p>2. Vestibulum interdum ex eu dignissim eleifend. Morbi molestie libero orci, volutpat pulvinar ipsum efficitur non. Aliquam ut ligula augue. Pellentesque vel velit nec turpis fermentum consectetur a non sapien.</p> <br />
                                <p>3. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus imperdiet, quam sit amet convallis tempor, nisl metus aliquet magna, et imperdiet nibh diam vel elit. Phasellus mollis ac augue sed varius.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-8 ">
                    <button className="bg-blue-600 flex items-center text-white px-6 py-3 rounded-3xl">Read More <BsArrowRight className="ml-3 "></BsArrowRight> </button>
                </div>

            </div>
            <div>
                <img className="rounded-md" src="https://i.ibb.co/yk9QsxP/faq-lang.jpg" alt="" />
            </div>

        </div>
    );
};

export default Questions;