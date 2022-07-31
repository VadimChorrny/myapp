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
      <img
        src={
          user?.avatar_url ??
          'https://cdn-icons.flaticon.com/png/512/5752/premium/5752574.png?token=exp=1659277049~hmac=9a256d065b9ab5293914b0910537afa2'
        }
      />
    </div>
  );
}
