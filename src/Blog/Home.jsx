import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './home.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`${url}/3`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function createPost() {
    axios
      .post(`${url}`, {
        title: 'Hello, I am Vadym!',
        body: 'Something text who',
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (!data)
    return (
      <>
        <h1>No Content</h1>
      </>
    ); // can something others or custom component

  return (
    <div className='container'>
      <h1>Our post with id: {data.id}</h1>
      <h3>{data.title}</h3>
      <h4>{data.body}</h4>
      <button onClick={createPost}>Create</button>
    </div>
  );
}

// EXAMPLES

//const data = 1;

//const setData = (data, value) =>{ // for example: value = 2
//    return data; //
//if ((data, value)) {
//  return data;
//} else {
//  return data + value; // = 3
//}
//}

// PACKEGES

// npm i axios
