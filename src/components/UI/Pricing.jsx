import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
    return <section>
        <div className='cotainer'>
            <div className="pricing_top">
                <h2 className="section_title">Class <span className="highlights"> Pricing </span>Plans</h2>
                <p>Choose the plan that fits YOU. We are here to make sure you can learn at affordable rates and make use off all the benefits we offer!
                </p>
            </div>

            <div className='pricing_wrapper'>
                <div className='pricing_item'>
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Bronze Cookie</h2>
                        <h2 className='pricing section_title'>$250 <span>/month
                            </span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li>
                                <span>
                                    <i class="ri-checkbox-blank-circle-fill"></i>
                                    </span>
                                    up to four classes per week
                                    </li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>group lectures</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>limited cuisines</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>professional training</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>hands-on experience</li>
                        </ul>
                        
                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>




                <div className='pricing_item pricing_item-02'>
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Silver Brownie</h2>
                        <h2 className='pricing section_title'>$400 <span>/month
                            </span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li>
                                <span>
                                    <i class="ri-checkbox-blank-circle-fill"></i>
                                    </span>
                                    up to 7 classes per week
                                    </li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>networking opportunities</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>exposure to different cuisines</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>live lectures with chefs around the world.</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>experience with patisseries</li>
                        </ul>
                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>





                <div className='pricing_item'>
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Gold Cupcake</h2>
                        <h2 className='pricing section_title'>$550 <span>/month
                            </span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li>
                                <span>
                                    <i class="ri-checkbox-blank-circle-fill"></i>
                                    </span>
                                    join any class on any day
                                    </li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>one-on-one lectures with our chefs</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>around the world cuisines</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>both online and in-person access</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>all-free pass to events</li>
                        </ul>
                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>







            </div>
        </div>
    </section>
}

export default Pricing