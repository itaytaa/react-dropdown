import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import './DropdownButton.css'
function DropdownButton(props) {
    return (
        <button className={props.isClicked?"DropdownButton focus":"DropdownButton"} onClick={props.onClick} >
            {props.children}<FaCaretDown/>
        </button>
    )
}

export default DropdownButton
