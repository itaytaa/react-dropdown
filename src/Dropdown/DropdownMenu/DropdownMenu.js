import React from 'react'
import DropdownItem from './DropdownItem/DropdownItem'
import './DropdownMenu.css'
function DropdownMenu(props) {

    return (
        <ul  className={props.className}>
            {props.itemsList.map((item,index)=>{
               
                return <DropdownItem title={item} key={index} />
            })}
        </ul>
    )
}

export default DropdownMenu