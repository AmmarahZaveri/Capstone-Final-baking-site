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
                    <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                    </p>
                </div>

                <div className="footer_box">
                    <h4 className="footer_title">Company</h4>

                    <ul className="footer_links">
                        <li><a href="">Our program</a></li>
                        <li><a href="">Our Plan</a></li>
                        <li><a href="">Become a member</a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>


                <div className="footer_box">
                    <h4 className="footer_title">Qyuick Links</h4>

                    <ul className="footer_links">
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Become a member</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>



                <div className="footer_box">
                    <h4 className="footer_title">Qyuick Links</h4>

                    <ul className="footer_links">
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Become a member</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                 </div>
        </div>
    </footer>
};

export default Footer;