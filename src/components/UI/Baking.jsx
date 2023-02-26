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
                        Learn from some of the <span className="highlights">BEST</span> Patissiers in the county
                    </h2>
                    <p>RAndome stuff details etc vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv. <br />
                        vvvvvvvvvvvvv</p>
                </div>
                <div className='baking_wrapper'>
                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon1} alt="" /></span>
                        <div className='baking_content'>
                            <h4>The chef life</h4>
                            <p>kkkkkkkkkk. <br />
                                kkkkkkkkkkkkkkkkkkkkkkkk
                            </p>
                        </div>
                    </div>

                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon2} alt="" /></span>
                        <div className='baking_content'>
                            <h4>The chef life</h4>
                            <p>kkkkkkkkkkkkkk. <br />
                                kkkkkkkkkkkkkkkkkkkkkkkkk
                            </p>
                        </div>
                    </div>



                    <div className="baking_item">
                        <span className='baking_icon'><img src={icon3} alt="" /></span>
                        <div className='baking_content'>
                            <h4>The chef life</h4>
                            <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk. <br />
                                kkkkkkkkkkkkkkkkk
                            </p>
                        </div>
                    </div>





                </div>
            </div>
        </section>
    )
}
export default Baking