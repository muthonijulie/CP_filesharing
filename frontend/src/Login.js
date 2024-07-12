import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginvalidation'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Submitted:', values);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Enter email'
              className='form-control rounded-0'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              id='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              placeholder='Enter Password'
              className='form-control rounded-0'
              required
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
          <p></p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0' style={{ textDecoration: 'none' }}>Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
