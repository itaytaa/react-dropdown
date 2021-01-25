import React from 'react'
import './DropdownMenu.css';

function DropdownMenu(props) {
    return (
        <ul className="DropdownMenu">
            {props.children}
        </ul>
    )
}

export default DropdownMenu
