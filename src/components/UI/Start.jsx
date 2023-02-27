import React from 'react'
import '../../styles/start.css'
import bakergirl from '../../assets/img/bake1.png'

const Start = () => {
    return <section>
        <div className='container'>
            <div className='start_wrapper'>
                <div className='start_img'>
                    <img src={bakergirl} alt="" />
                </div>

                <div className='start_content'>
                    <h2 className='section_title'>
                        Ready to <span className="highlights">learn</span> the secrets of sweets?
                    </h2>
                    <p>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm<br />mmmmmm
                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                    </p>

                    <button className="register_btn"> Get started today</button>
                </div>

            </div>

        </div>
    </section>
}

export default Start