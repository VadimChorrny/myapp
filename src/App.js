import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './Phone/Blog';
import Contact from './Phone/Contact';
import Home from './Phone/Home';
import Layout from './Phone/Layout';
import NoPage from './Phone/NoPage';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
