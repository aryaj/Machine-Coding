import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProgressBar from './components/ProgressBar/ProgressBar';
import Accordion from './components/Accordion/Accordion';
import Tabs from './components/Tabs/Tabs';
import ErrorBoundary from './components/ErrorBoundary';
import NestedCheckbox from './components/NestedCheckbox/NestedCheckbox';
import ReactToasts from './components/ReactToasts/ReactToasts';
import Layout from './components/Layout';
import StarRating from './components/StartRating/StarRating';
import Pagination from './components/Pagination/Pagination';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true, element: <App />
      },
      {
        path: 'progressBar',
        element: <ProgressBar />,
        handle: { title: 'Progress Bar' }
      },
      {
        path: 'tabs',
        element: <Tabs />,
        handle: { title: 'Tabs' }
      },
      {
        path: 'accordion',
        element: <Accordion />,
        handle: { title: 'Accordion' }
      },
      {
        path: 'nestedCheckbox',
        element: <NestedCheckbox />,
        handle: { title: 'Nested Checkbox' }
      },
      {
        path: 'reactToasts',
        element: <ReactToasts />,
        handle: { title: 'React Toasts' }
      },
      {
        path: 'starRating',
        element: <StarRating />,
        handle: { title: 'Start Rating' }
      },
      {
        path: 'pagination',
        element: <Pagination />,
        handle: { title: 'Pagination' }
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
