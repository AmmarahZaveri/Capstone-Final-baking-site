import React from 'react'
import heroImg from '../../assets/img/henna2.png'
import '../../styles/hero.css'
import { Link } from 'react-router-dom';

const Hero =() => {
    return <section>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h2>Welcome to <span className="highlights">ZAVERI</span>, a haven for all things <br />
                    sweet and savory.</h2>
                    <p>At ZAVERI you can learn the fundamentals of cooking from professionals while <br />
                    remaining comfortable in your own kitchen. Our cuting-edge online curriculum <br />
                    examines palate development, culinary business principles, theory, science, and <br />
                    practice for many popular cuisines. A practical industry externship is a component <br />
                    of the program that will help you develop your abilities and gain practical baking <br />
                    and cooking experience. We have expertly designed a comprehensive curriculum <br />
                    delivered online as well as access to live culinary expert demos, lectures, and <br />
                    networking events. At ZAVERI, we are felixible. life-friendly, affordable and offer <br />
                    a supportive community environment. Join today and find your culinary voice!</p>
                        
                        <div className="hero_btns">
                        <Link to='/classes'>
                            <button className='register_btn'>Get Started</button>
                            </Link>
                            

                        </div>
                </div>


                <div className="hero_img">
                    <div className="hero_img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box_img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cake_img">
                            <h5>Achieve</h5>
                            <span><i class="ri-medal-2-line"></i></span>
                            <h6>new skills</h6>
                        </div>

                        <div className='class_location'>
                        <span>
                            <i class="ri-map-pin-2-fill"></i>
                        </span>
                            <h5>Find a class <br /> near you today</h5>

                        </div>

                        <div className='cake_icon'>
                        <span><i class="ri-earth-fill"></i></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default Hero