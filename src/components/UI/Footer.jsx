import React from "react"
import '../../styles/footer.css'
import logo from '../../assets/img/henna1.png'

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo_img">
                            <img src ={logo} alt="" />
                        </div>
                        <h2>ZAVERI</h2>
                    </div>
                    <p>You have reached the end!
                    </p>
                </div>

                <div className="footer_box">
                    <h4 className="footer_title">Information</h4>

                    <ul className="footer_links">
                        <li><a href="">Offered Programs</a></li>
                        <li><a href="">Our Plans</a></li>
                        <li><a href="">Become a Member</a></li>
                        <li><a href="">Individual Classes</a></li>
                    </ul>
                </div>


                <div className="footer_box">
                    <h4 className="footer_title">Quick Links</h4>

                    <ul className="footer_links">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Social Media</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>



                <div className="footer_box">
                    <h4 className="footer_title">Help</h4>

                    <ul className="footer_links">
                        <li><a href="">Ask Question</a></li>
                        <li><a href="">Memberships</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                 </div>
        </div>
    </footer>
};

export default Footer;