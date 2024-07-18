import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import './Signupvalidation';

function Signup() {
  const [values, setValues] = useState({
    name: '',
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
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input 
              type="text" 
              id="name" 
              name="name" // Add name attribute
              value={values.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="form-control rounded-0" 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input 
              type="email" 
              id="email"
              name="email" // Add name attribute
              value={values.email}
              onChange={handleChange} 
              placeholder="Enter email" 
              className="form-control rounded-0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input 
              type="password"
              id="password"
              name="password" // Add name attribute
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Password" 
              className="form-control rounded-0" 
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Sign up</strong></button>
          <p></p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0" style={{textDecoration:'none'}}>Log in</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
