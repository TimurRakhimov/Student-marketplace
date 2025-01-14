import React, { useState } from 'react';
import PopupOverlay from './PopupOverlay';
import './SignupPage.css'; // Reusing the same CSS for consistency

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API for login
    console.log({ email, password });
  };

  return (
    <PopupOverlay onClose={onClose}>
      <div className="signup-page"> {/* Using signup-page class for layout */}
        <div className="signup-left">
          <h1>Welcome Back!</h1>
          <p>Continue your journey with us. Stay connected and explore opportunities effortlessly.</p>
        </div>
        <div className="signup-right"> {/* Signup-right reused for login form */}
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="signup-form"> {/* Signup-form reused */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signup-button"> {/* Button class reused */}
              Login
            </button>
          </form>
        </div>
      </div>
    </PopupOverlay>
  );
};

export default LoginPage;
