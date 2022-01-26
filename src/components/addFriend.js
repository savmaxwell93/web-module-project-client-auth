import React from 'react';

const AddFriends = () => {
    return (
      <div>
        <h1>ADD FRIEND</h1>
        <form>
          <div>
            <label htmlFor='username'>FRIEND NAME</label>
              <input
                type='text'
                name='friend-name'
                id='username'
              /> 
          </div>
          <div>
            <label htmlFor='age'>FRIEND AGE</label>
              <input
                type='text'
                name='friend-age'
                id='age'
              />
          </div>
          <div>
            <label htmlFor='email'>FRIEND EMAIL</label>
              <input
                type='text'
                name='friend-email'
                id='email'
              />
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    )
}

export default AddFriends;