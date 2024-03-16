import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset any previous error messages
    setPasswordError('');
    setEmailError('');

    // Perform basic email validation
    if (!username || !username.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Perform password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return; // Prevent form submission if password is invalid
    }

    // Perform login authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    // Reset form fields after successful submission
    setUsername('');
    setPassword('');
  };

  const handleGoogleSignup = () => {
    console.log("Sign in with Google");
  };

  const handleFacebookSignup = () => {
    console.log("Sign in with Facebook");
  };

  const handleTwitterSignup = () => {
    console.log("Sign in with Twitter");
  };

  return (
    <div className="flex justify-center h-full items-center mt-20">
      <div className=" rounded-lg p-8 " style={{ width: '500px' }}>
        <h1 className="text-3xl font-semibold mb-4 font-sans text-center">Swirl Marketing</h1>
        <div className='my-5 h-[1px] bg-[#00008B]' />

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <FaUserCircle className="text-blue-600 mr-2" size={24} />
            <input
              type="email"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input px-2 mt-1 h-10 w-full md:w-[calc(100%-2.5rem)] 
              rounded-lg border-gray-300 border"
              placeholder="Email"
              required
            />
          </div>
          {emailError && <p className="text-red-600">{emailError}</p>}
          <div className="mb-4 flex items-center">
            <TbPasswordFingerprint className="text-blue-600 mr-2" size={26} />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              min={8}
              className="form-input px-2 mt-1 w-full md:w-[calc(100%-2.5rem)] h-10 rounded-lg border-gray-300 border"
              placeholder="Password"
              required
            />
          </div>
          {passwordError && <p className="text-red-600">{passwordError}</p>}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">Remember me</label> 
            <span className="text-sm ml-auto">
              <Link to="/forget-pass" className='text-red-600'>Forgot password ?</Link>
            </span>
          </div>
         
          <button type="submit" className=" text-blue border-2 border-blue-900 mt-4 px-4 py-2 rounded-md hover:text-white hover:bg-[#00008B] focus:outline-none focus:bg-[#00008B] w-full duration-700 ease-in-out">SIGN IN</button>
        </form>
        <div className='my-5 h-[1px] bg-[#00008B]' />

        <div className="mt-4 text-center py-4">
          <button className="bg-red-500 text-white my-2 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 w-full" onClick={handleGoogleSignup}> Sign up with Google</button>
          <button className="bg-blue-700 text-white my-2 px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800 w-full" onClick={handleFacebookSignup}>Sign up with Facebook</button>
          <button className="bg-blue-400 text-white my-2 px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full" onClick={handleTwitterSignup}>Sign up with Twitter</button>
        </div>
        <div className='my-5 h-[1px] bg-[#00008B]' />

        <div className="text-center text-sm mt-2">
          <p>Don't have an account? <Link to="/signup" className='text-red-600'>Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
