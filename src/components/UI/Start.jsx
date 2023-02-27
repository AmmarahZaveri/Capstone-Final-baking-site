import React from 'react';
import '../../styles/start.css';
import bakergirl from '../../assets/img/bakePeople.png';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <section>
      <div className='container'>
        <div className='start_wrapper'>
          <div className='start_img'>
            <img src={bakergirl} alt='' />
          </div>

          <div className='start_content'>
            <h2 className='section_title'>
              Start your <span className='highlights'>FIRST</span> class today!
            </h2>
            <p>mmmmmmmmmmmmmmmmmm</p>

            <Link to='/form'>
              <button className='register_btn'>Join now</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;