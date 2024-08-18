import './loginsignup.css';
import { Link } from 'react-router-dom';
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if(email==='seller@gmail.com'&&password==='seller'){
      navigate('/dashboard')
    }else if(email==='client@gmail.com'&&password==='client'){
      navigate('/')
    }else if(email==='admin@gmail.com'&&password==='admin'){
      navigate('/admindash')
    }
  };

  return (
    <div className='top-container1'>
      <div className='top-container2'>
        <div className='image-container'>
          <img src='https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' alt='Login' />
        </div>
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" ref={emailRef} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" ref={passwordRef} required />
            </label>
            <button id='btn1' type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
