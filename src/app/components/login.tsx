import React from 'react';
import '../styles/login.css';

interface IProps {
  toggleLogin: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Dashboard({ toggleLogin }: IProps) {
  return (
    <>
      <span className="title">Login</span>
      <span id="error"></span>
      <div className="padding">
        <form method="post" id="login-form" className="form-container">
          <label className="login-label input-container">
            <span className="login-label-text"> Email </span>
            <input
              className="login-input"
              type="text"
              name="email"
              autoComplete="email"
              required
            />
          </label>
          <label className="login-label input-container">
            <span className="login-label-text"> Password </span>
            <input
              className="login-input"
              autoComplete="current-password"
              type="password"
              name="password"
              required
            />
          </label>

          <input
            className="login-submit"
            id="submit"
            type="submit"
            value="Submit! 🔥"
          />
        </form>
      </div>

      <button
        // onClick="location.href='http://localhost:3000/'"
        onClick={toggleLogin}
        className="go-back"
        type="button"
      >
        Go back!
      </button>
    </>
  );
}
