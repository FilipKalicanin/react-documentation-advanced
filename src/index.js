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
// import AnimationRef from './Refs/AnimationRef';
// import RenderProps2App from './RenderProps.js/Example2.js/RenderProps2App';
// import AppHoc2 from './HOC/HOC2.js/AppHoc2'
import HooksApp from './Hooks/HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <HooksApp />
  </React.StrictMode>,
  document.getElementById('root')
);