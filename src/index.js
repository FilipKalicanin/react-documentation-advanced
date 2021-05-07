import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CreateRef from './Refs/CreateRef';
// import AppRef from './Refs/CreateRef';
// import AppHOC from './HOC/AppHOC';
// import ContextApp from './Context/ContextApp';
// import PortalsApp from './Portals/PortalsApp';
// import ErrorApp from './ErrorBoundary/ErrorApp';
// import AppPortal from './Portals/indexPortal';
// import RenderPropsApp from './RenderProps.js/RenderPropsApp';
import AnimationRef from './Refs/AnimationRef';

ReactDOM.render(
  <React.StrictMode>
    <AnimationRef />
  </React.StrictMode>,
  document.getElementById('root')
);