import React from 'react'
import './DropdownButton.css'
import { FaCaretDown } from "react-icons/fa";
function DropdownButton(props){
    return (
        <button onClick={props.onClick} className={props.isClicked?"focus":"" }>
            {props.children} <FaCaretDown/>
        </button>
    )
}

export default DropdownButton
