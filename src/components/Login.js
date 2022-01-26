import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { push } = useHistory();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', credentials)
      .then(resp => {
        const { token } = resp.data;
        localStorage.setItem('token', token);
        push('/friends')
      })
      .catch(err => {
        console.error(err)
      })
  }
    return (
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>USERNAME</label>
              <input
                type='text'
                name='username'
                id='username'
                onChange={handleChange}
              />
          </div>
          <div>
            <label htmlFor='password'>PASSWORD</label>
              <input
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
              />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    )
}

export default Login;