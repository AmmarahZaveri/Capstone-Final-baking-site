import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    alert('Your form has been submitted, we will reach out to you within 3-5 business days.');
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='phone'>Phone:</label>
        <input type='tel' id='phone' name='phone' />

        <label htmlFor='address'>Address:</label>
        <input type='text' id='address' name='address' />

        <label htmlFor='reason'>Would you prefer in-person or online?</label>
        <select id='reason' name='reason' value={reason} onChange={handleReasonChange}>
          <option value=''>Select choice</option>
          <option value='In-person'>In-person</option>
          <option value='Improve my abilities'>Online</option>
          <option value='Both'>Both</option>
        </select>

        <label htmlFor='reason'>How many days would you like for take classes?</label>
        <select id='reason' name='reason' value={reason} onChange={handleReasonChange}>
          <option value=''>Select choice</option>
          <option value='In-person'>2-3 days</option>
          <option value='Improve my abilities'>4-5</option>
          <option value='Both'>I am not sure yet</option>
        </select>

        <label htmlFor='address'>Do you have any questions for us?</label>
        <input type='text' id='address' name='address' />

        <button type='submit'>Submit</button>
        {isSubmitted && <p>Thank you for your patience!</p>}
      </form>
    </div>
  );
};

export default Form;