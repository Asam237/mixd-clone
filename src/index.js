import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MyIndex from './pages/MyIndex';
import "./sass/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <MyIndex />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
