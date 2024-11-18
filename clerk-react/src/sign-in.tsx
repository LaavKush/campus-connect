import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
