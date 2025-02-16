import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleTermsChange = (event) => {
    setIsTermsAccepted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isTermsAccepted) {
      alert('Please accept the terms and conditions before logging in.');
      return;
    }

    navigate('/');
  };

  return (
    <div className='login-container'>
      <Link to='/'>
        <img src='./nex_logo.png' alt="Logo not loaded" className="logo" />
      </Link>

      <div className="card login-card">
        <div className="card-body">
          <h3 className="card-title text-center">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="terms form-group form-check">
              <input
                type="checkbox"
                checked={isTermsAccepted}
                onChange={handleTermsChange}
              />
              <small>
                I agree to the <Link to="/terms">Terms and Conditions</Link>
              </small>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={!isTermsAccepted}
            >
              Login
            </button>
          </form>

          <div className="register-link">
            <Link to="/register" className="btn-link">
              Don't have an account? Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
