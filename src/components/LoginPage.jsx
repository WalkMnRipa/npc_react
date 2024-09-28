import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (identifier === 'joey' && password === 'jowander') ||
      (identifier.endsWith('@student.42.fr') && password === 'jowander')
    ) {
      onLogin({ email: identifier === 'joey' ? 'joey@example.com' : identifier });
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page-base">
      <div className="login-page-base-wrapper">
        <header>
          <Lock size={24} />
          <h2>Login to NPCfriends</h2>
        </header>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <footer className="login-footer">
        &copy; 2024 NPCfriends. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;