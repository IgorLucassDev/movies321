import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Router Components
import Home from './routes/home/Home';
import Movies from './routes/movies/Movies';
import About from './routes/about/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'movies',
        element: <Movies/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
