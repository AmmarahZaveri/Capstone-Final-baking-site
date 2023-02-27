import React from 'react'
import '../../styles/baking.css'
import icon1 from '../../assets/img/bake1.png'
import icon2 from '../../assets/img/bake2.png'
import icon3 from '../../assets/img/bake3.png'

const Baking = () => {
    return (
        <section>
            <div className='container baking_container'>
                <div className='baking_top'>
                    <h2 className='section_title'>
                        Learn from some of the <span className="highlights">BEST</span> culinary artists in the country
                    </h2>
                    <p>Learn from out roster of 50 Expert Chef-Instructors from <br />
                    prominent restaurant and food buisnesses.</p>
                </div>
                <div className='baking_wrapper'>
                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon1} alt="" /></span>
                        <div className='baking_content'>
                            <h4>#3 Best Culinary School</h4>
                            <p>Our faculty and alumni have <br />
                                been awarded top honors as <br />
                                one of the top 5 in the world!
                            </p>
                        </div>
                    </div>

                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon2} alt="" /></span>
                        <div className='baking_content'>
                            <h4>20,000 Alumni</h4>
                            <p>Our alumni lead the industry<br />
                               and are transforming the future <br />
                               of culinary innovation.
                            </p>
                        </div>
                    </div>



                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon3} alt="" /></span>
                        <div className='baking_content'>
                            <h4>50+ Years</h4>
                            <p>With more that 50 years of <br />
                            experience, ZAVERI is one of the <br />
                            respected culinary schools today.
                            </p>
                        </div>
                    </div>





                </div>
            </div>
        </section>
    )
}
export default Baking