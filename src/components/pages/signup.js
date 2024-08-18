import './loginsignup.css';
import { Link } from 'react-router-dom';
import React, { useRef, useState } from "react";
import axios from 'axios';
import {postUsers} from '../../services/api.js'

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await postUsers({email,password})
   
  };

  return (
    <div className='top-container1'>
      <div className='top-container2'>
        <div className='image-container'>
          <img src='https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' alt='Signup' />
        </div>
        <div className="container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" ref={emailRef} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={passwordRef} required />
            </label>
            <button id='btn1' type="submit">Signup</button>
          </form>
          <p>
            Already have an account? <Link to="/loginsignup">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
