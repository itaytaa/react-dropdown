import React from 'react'
import './DropdownItem.css'
function DropdownItem(props) {
    return (
        <li>
            <a href="/">{props.title}</a>
        </li>
    )
}

export default DropdownItem
