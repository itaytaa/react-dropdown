import './App.css';
import Dropdown from './Dropdown/Dropdown';
import React from 'react'

function App() {


  const menuItems = [
    'Action',
    'Another action',
    'Something else',
  ];
  const menuItems2 = [
    'menu item',
    'menu item 2',
    'menu item 3',
  ];

  return (
    <div className="App" >
      <Dropdown buttonTitle="First Dropdown" itemsList={menuItems} />
      <Dropdown buttonTitle="Second Dropdown" itemsList={menuItems2} />
    </div>
  );
}

export default App;
