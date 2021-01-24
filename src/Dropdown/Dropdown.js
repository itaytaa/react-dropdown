import React, { useState, useRef, useEffect } from 'react'
import DropdownButton from './DropdownButton/DropdownButton'
import DropdownMenu from './DropdownMenu/DropdownMenu'

function Dropdown(props) {

    const drop = useRef()
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    function handleClick(e) {
        if (!drop.current.contains(e.target)) {
            setShowMenu(false)
        }
    };

    return (
        <div className="Dropdown" ref={drop}>
            <DropdownButton onClick={toggleMenu} isClicked={showMenu}>{props.children} </DropdownButton>
            {showMenu && <DropdownMenu itemsList={props.itemsList} />}
        </div>
    )
}

export default Dropdown
