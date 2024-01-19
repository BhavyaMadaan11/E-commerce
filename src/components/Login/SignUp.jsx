// src/components/Login/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration file

const Signup = ({ setIsRegistered }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Initialize Firebase if not already initialized
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const auth = firebase.auth();
      const response = await auth.createUserWithEmailAndPassword(email, password);

      // User has been successfully registered
      console.log('User registered:', response.user);

      // You may want to add additional logic here, such as updating user profile, etc.

      // Update the registration status in the parent component
      setIsRegistered(true);
    } catch (error) {
      // Handle signup errors
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded w-full"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <p>Already Have an Account?
          <Link to='/login'>LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
