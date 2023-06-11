import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Language</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                   
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover"><p>Fluent<span>Academy</span>  <br />Providing Language Proficiency since 1992</p></a>
                    <a className="link link-hover">Contact-01734800000</a>
                    <a className="link link-hover">Online Learning Platform</a>
                    <a className="link link-hover">Langluage</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                    <div className='flex gap-5 items-center'>
                        <p>Follow Us __</p>
                        <a href="https://www.facebook.com/profile.php?id=100083636641949" target="blank"><FaFacebook className='h-6 w-6 cursor-pointer hover:text-indigo-500'></FaFacebook>  </a>
                        <a href="https://www.instagram.com/mrinmoyehimadrita/" target="blank"><FaInstagram className='h-6 w-6 cursor-pointer hover:text-indigo-500'></FaInstagram>  </a>
                        <a href="https://www.facebook.com/profile.php?id=100083636641949" target="blank"><FaTwitter className='h-6 w-6 cursor-pointer hover:text-indigo-500'></FaTwitter>  </a>
                        
                    </div>
                    
                    </div>
                    <span><a className="link link-hover">Talipara, Kushtia</a></span> 
                </div>

            </div>
            
                <div className=" text-center p-4 bg-base-300 text-base-content">
                    <p>Copyright © 2023 - All right reserved by FluentAcademy.com</p>
                </div>
          
        </footer>
    );
};

export default Footer;