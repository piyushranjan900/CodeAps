// src/pages/ClientLogin.tsx
import React from 'react';
import './ClientLogin.css';

const ClientLogin: React.FC = () => {
  return (
    <div className="client-login">
      <h1>Client Login</h1>
      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ClientLogin;
