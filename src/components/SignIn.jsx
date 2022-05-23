import React, { useState } from 'react';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    if (password === passwordConfirmation) {
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: userName,
            password,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('jwt_token', data.token);
        });
    } else {
      alert('Your password was not confirmed');
    }
  };

  return (
    <div>
      <h3>Create an Account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          type="password"
          name="passwordConfirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="confirm password"
        />

        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default SignIn;
