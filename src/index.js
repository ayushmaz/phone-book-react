import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddContact from './AddContact';
import * as serviceWorker from './serviceWorker';
import ShowContacts from './ShowContacts';
import PhoneBook from './PhoneBook';

ReactDOM.render(
  <React.StrictMode>
    <PhoneBook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
