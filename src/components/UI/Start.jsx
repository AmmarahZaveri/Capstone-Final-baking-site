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
              Fill out a small form and <span className='highlights'>GET STARTED</span> with our team!
            </h2>
            <p>Starting is always the most difficult step. Join our team and take action to receive your first class free of charge! Fill out some basic information for us, and we will get back to you with a quick interview. If you're not sure how you would like to set up classes, take a look at our pricing plan below. Whenever you're ready, join us to make a difference in the culinary of the future.  </p>

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