import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddFriends = () => {
  const { push } = useHistory();
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    axios.post('http://localhost:9000/api/friends', form, {
      headers: {
        authorization: token
      }
    })
      .then(resp => {
        push('/friends')
      })
      .catch(err => {
        console.error(err)
      })
  }

    return (
      <div>
        <h1>ADD FRIEND</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>FRIEND NAME</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={handleChange}
              /> 
          </div>
          <div>
            <label htmlFor='age'>FRIEND AGE</label>
              <input
                type='text'
                name='age'
                id='age'
                onChange={handleChange}
              />
          </div>
          <div>
            <label htmlFor='email'>FRIEND EMAIL</label>
              <input
                type='text'
                name='email'
                id='email'
                onChange={handleChange}
              />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    )
}

export default AddFriends;