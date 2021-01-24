import React from 'react'
import './DropdownItem.css'
function DropdownItem(props) {
    return (
        <li className="DropdownItem">
            <a href="/">{props.title}</a>
        </li>
    )
}

export default DropdownItem
