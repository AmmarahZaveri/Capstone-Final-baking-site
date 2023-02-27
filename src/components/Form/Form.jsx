

import "./form.css";

import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email' />

      <label htmlFor='phone'>Phone:</label>
      <input type='tel' id='phone' name='phone' />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;