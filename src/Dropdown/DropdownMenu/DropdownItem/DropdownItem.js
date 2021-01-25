import React from 'react'
import './DropdownItem.css'
function DropdownItem(props) {

    return (
        <li className="DropdownItem">
          <a className="DropdownA" href={props.route}> {props.children}</a> 
        </li>
    )
}

export default DropdownItem
