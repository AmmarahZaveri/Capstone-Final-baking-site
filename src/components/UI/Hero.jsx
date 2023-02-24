import React from 'react'
import heroImg from '../../assets/img/henna2.png'
import '../../styles/hero.css'

const Hero =() => {
    return <section>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <h2>Get your <span className="highlights"> FIRST</span> class today or seomthing</h2>
                    <p>other randon stuff rrrrrrrrrrrrrrrr
                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr <br />
                        rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                        rrrrrrrrrrrr.</p>
                        
                        <div className="hero_btns">
                            <button className="register_btn">Get Started</button>
                            <button className="watch_btn"><span><i class="ri-play-fill"></i>
                            </span>Watch video</button>

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
                            <h5>Try classics</h5>
                            <span><i class="ri-cake-2-line"></i></span>
                        </div>

                        <div className='class_location'>
                        <span>
                            <i class="ri-map-pin-2-fill"></i>
                        </span>
                            <h5>Find a class <br /> near you today</h5>

                        </div>

                        <div className='cake_icon'>
                        <span><i class="ri-cake-3-line"></i></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}

export default Hero