import React from 'react'
import ReactDOM from 'react-dom';

// within public/index.html create new <div id="modal-root"></div>
// use ReactDOM to display element within different root

function PortalsApp() {
    return ReactDOM.createPortal(
        <div>
            <h2>
                Portal demo
            </h2>
        </div>,
        document.getElementById('modal-root')
    )
}

export default PortalsApp
