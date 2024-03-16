import React, { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineWifiPassword } from "react-icons/md";

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    setError('');

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Agree Terms:', agreeTerms);

    // Reset form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAgreeTerms(false);
  };

  const handleGoogleSignup = () => {
    console.log("Sign up with Google");
  };

  const handleFacebookSignup = () => {
    console.log("Sign up with Facebook");
  };

  const handleTwitterSignup = () => {
    console.log("Sign up with Twitter");
  };

  return (
    <div className='bg-slate-200 p-1'>
      <div className="flex justify-center h-screen items-center my-36">
        <div className="bg-white rounded-lg p-10 shadow-md" style={{ width: '600px' }}>
          <h1 className="text-3xl font-semibold mb-4 text-center">Swirl Marketing</h1>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <div className='my-5 h-[1px] bg-[#00008B]' />
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <FaUser className="text-blue-600 mr-2" size={24} />
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input px-2 mt-1 w-full md:w-[calc(100%-2.5rem)] rounded-lg border border-gray-300 h-12" // Adjusted height
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" size={24} />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input px-2 mt-1 w-full md:w-[calc(100%-2.5rem)] border rounded-lg border-gray-300 h-12" // Adjusted height
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <MdOutlineWifiPassword className="text-blue-600 mr-2" size={24} />
              <input
                type="password"
                id="password"
                name="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 px-2 w-full md:w-[calc(100%-2.5rem)] border rounded-lg border-gray-300 h-12" // Adjusted height
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <MdOutlineWifiPassword className="text-blue-600 mr-2" size={24} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input px-2 mt-1 w-full md:w-[calc(100%-2.5rem)] border rounded-lg border-gray-300 h-12" // Adjusted height
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="agreeTerms" className="text-sm">I agree to the terms and conditions</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">Sign Up</button>
          </form>
          <div className='my-5 h-[1px] bg-[#00008B]' />

          <div className="mt-1 text-center py-4">
            <button className="bg-red-500 text-white my-2 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 w-full" onClick={handleGoogleSignup}> Sign up with Google</button>
            <button className="bg-blue-700 text-white my-2 px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800 w-full" onClick={handleFacebookSignup}>Sign up with Facebook</button>
            <button className="bg-blue-400 text-white my-2 px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 w-full" onClick={handleTwitterSignup}>Sign up with Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
