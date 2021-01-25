import React from 'react'
import './Dropdown.css'

function Dropdown(props) {
   
    return (
        <div className="Dropdown">
          {props.children}
        </div>
    )
}

export default Dropdown
