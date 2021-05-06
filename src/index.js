import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CreateRef from './Refs/CreateRef';
// import App from './Refs/CreateRef';
// import AppHOC from './HOC/AppHOC';
// import ContextApp from './Context/ContextApp';
// import PortalsApp from './Portals/PortalsApp';
import ErrorApp from './ErrorBoundary/ErrorApp';

ReactDOM.render(
  <React.StrictMode>
    <ErrorApp />
  </React.StrictMode>,
  document.getElementById('root')
);