import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate the vendor
    // For this example, we'll just do a simple check
    if (email === 'vendor@example.com' && password === 'password') {
      // Successful login
      console.log('Vendor logged in successfully');
      // Redirect to a vendor dashboard or product management page
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Vendor Login</h2>
      {error && <p className="text-red-500 mb-5">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Log In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <a href="/vendor-signup" className="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  );
}

export default VendorLogin;