import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Forgetp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform basic email validation
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear any existing email error
    setEmailError('');

    // Send password reset email logic here
    console.log('Email sent to:', email);

    setEmail('');
    setIsEmailSent(true);
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="rounded-lg p-8" style={{ width: '500px' }}>
        <h1 className="text-3xl mb-4 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input px-2 mt-1 w-full h-10 rounded-lg border-gray-300 border"
              placeholder="Enter your email address"
              required
            />
            {emailError && <p className="text-red-600 mt-1">{emailError}</p>}
          </div>
          <button type="submit" className=" text-[#00008B] border-2 border-[#00008B] mt-4 px-4 py-2 rounded-md hover:text-white hover:bg-[#00008B]  w-full duration-700 ease-in-out">SUBMIT</button>
        </form>
        {isEmailSent && <p className="text-green-600 mt-4">An email with instructions to reset your password has been sent to {email}.</p>}
        <div className="text-center text-sm mt-4">
          <p>Remember your password? <Link to="/login" className="text-blue-600">Sign in here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Forgetp;
