import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (user: { email: string }) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
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
          <h2>Login</h2>
        </header>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          <label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Username or Email"
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <section>
            <button type="submit">Log In</button>
          </section>
        </form>
      </div>
      <footer className="login-footer">© 2024 NPCfriends. All rights reserved.</footer>
    </div>
  );
};

export default LoginPage;