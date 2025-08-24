import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import ErrorBoundary from './components/ErrorBoundary';
import NestedCheckbox from './components/NestedCheckbox';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/progressBar',
    element: <ProgressBar />
  },
  {
    path: '/tabs',
    element: <Tabs />
  },
  {
    path: '/accordion',
    element: <Accordion />
  },
  {
    path: '/nestedCheckbox',
    element: <NestedCheckbox />
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
