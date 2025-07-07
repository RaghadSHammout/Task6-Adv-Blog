import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import BlogList from './pages/BlogList/BlogList';
import BlogPost from './pages/BlogPost/BlogPost';
import NewsletterPage from './pages/NewsLetterPage/NewsLetterPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <BlogList /> },    
      { path: 'post/:id', element: <BlogPost /> },
            { path: 'newsletter', element: <NewsletterPage /> }, 
                  { path: '*', element: <PageNotFound/> },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
