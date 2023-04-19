import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';


const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App; 