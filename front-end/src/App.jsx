import React, {useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },{
      path: 'articles',
      element: <ArticlesListPage />, 
    },
    {
      path: 'articles/:name', // Dynamic route for article pages
      element: <ArticlePage />,
      loader: articleLoader, // Loader function to fetch article data: 
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'create-account',
      element: <CreateAccountPage />,
    },
  ]
}]

  

const router = createBrowserRouter(routes)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App
