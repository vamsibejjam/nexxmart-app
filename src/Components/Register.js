import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (email) {
      setStep(2);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password) {
      console.log('Registering user with email:', email);
      console.log('Password:', password);
      navigate('/');
    } else {
      alert('Please enter a password.');
    }
  };

  return (
    <div className='register-container'>
      <Link to='/'>
        <img src='./nex_logo.png' alt="Logo not loaded" className="logo" />
      </Link>

      <div className="card register-card">
        <div className="card-body">
          <h3 className="card-title text-center">Register</h3>
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Confirm
              </button>
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
