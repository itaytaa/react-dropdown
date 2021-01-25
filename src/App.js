import './App.css';
import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown/Dropdown';
import DropdownButton from './Dropdown/DropdownButton/DropdownButton';
import DropdownItem from './Dropdown/DropdownMenu/DropdownItem/DropdownItem';
import DropdownMenu from './Dropdown/DropdownMenu/DropdownMenu';

function App() {

  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)

  useEffect(() => { window.addEventListener('mousedown', handleClick) }, [])
  function handleClick(e) {
    if (e.target.className !== "DropdownButton focus" &&
      e.target.className !== "DropdownA") {
      setDrop1(false)
      setDrop2(false)
    }
  }

  return (
    <div className="App">
      <div className="Dropdowns-container">

        <Dropdown>
          <DropdownButton onClick={() => { setDrop1(!drop1) }} isClicked={drop1}>Dropdown Button</DropdownButton>
          {drop1 && <DropdownMenu>
            <DropdownItem route="/">Action</DropdownItem>
            <DropdownItem route="/">Another action</DropdownItem>
            <DropdownItem route="/">Something else</DropdownItem>
          </DropdownMenu>}
        </Dropdown>

        {/* Second Dropdown */}
        <Dropdown>
          <DropdownButton onClick={() => { setDrop2(!drop2) }} isClicked={drop2}>Dropdown Button</DropdownButton>
          {drop2 && <DropdownMenu>
            <DropdownItem route="/">Action-2</DropdownItem>
            <DropdownItem route="/">Another action-3</DropdownItem>
            <DropdownItem route="/">Something else-4</DropdownItem>
          </DropdownMenu>}
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
