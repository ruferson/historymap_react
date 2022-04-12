import React from 'react';

function ToggleMenu(props) {

    
    return (
        <button id="sidebarCollapse" type="button" onClick={() => {props.setActive(!props.isActive)}} className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4">
            <i className="fa fa-bars mr-2"></i>
            <small className="text-uppercase font-weight-bold">Toggle</small>
        </button>
    );
}

export default ToggleMenu;

