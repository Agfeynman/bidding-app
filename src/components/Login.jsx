import React, { useState } from 'react';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const updateState = (e) => {
    console.log('updatestate', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e);
    // fetch('http://localhost:3000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: userName,
    //     password: pwd,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.authenticated) {
    //       localStorage.setItem('jwt_token', data.token);
    //       // props.updateCurrentUser(data.user.data)
    //     } else {
    //       alert('Password/Username combination not found');
    //     }
    //   });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={updateState}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          onChange={updateState}
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
