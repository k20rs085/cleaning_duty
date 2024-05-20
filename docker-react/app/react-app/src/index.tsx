import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import Heading from './Heading';
import UserList from './UserList';
import Lottery from './Lottery';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Heading content='抽選クン' />
    <UserList />
    <Lottery />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
