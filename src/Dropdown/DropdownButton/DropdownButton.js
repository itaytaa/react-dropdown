import React from 'react'
import './DropdownButton.css'
import { FaCaretDown } from "react-icons/fa";
function DropdownButton(props){
    return (
        <button onClick={props.onClick}>
            {props.children} <FaCaretDown/>
        </button>
    )
}

export default DropdownButton
