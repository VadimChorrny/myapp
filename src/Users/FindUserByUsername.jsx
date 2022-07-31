import React from 'react';
import { useState } from 'react';
import UserInfo from './UserInfo';

export default function FindUserByUsername() {
  const [currUsername, setCurrUsername] = useState();
  const [isUserSended, setIsUserSended] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUserSended(true);
  };

  const handleChange = (event) => {
    setCurrUsername(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Enter username:
          <input
            type='text'
            name='username'
            required
            placeholder='Example: TarasShevchenko'
            onChange={handleChange}
            value={currUsername}
          />
        </label>
        <button type='submit'>Search: </button>
      </form>
      {isUserSended && <UserInfo username={currUsername} />}
    </div>
  );
}
