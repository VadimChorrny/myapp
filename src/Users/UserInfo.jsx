import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const URL = 'https://api.github.com/users/';

export default function UserInfo(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${URL}` + props.username).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, [props.username]);

  return (
    <div>
      <h1>Login: {user?.login}</h1>
      <img src={user?.avatar_url} />
    </div>
  );
}
