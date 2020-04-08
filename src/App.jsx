import React from 'react';
import logo from './logo.svg';
import NewScreen from './views/screen/NewScreen'
import './App.css';
import TableProduct from './views/components/TableProduct';

function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"]
  const renderArr = () => {
    return arr.map((val) => {
      return (
      <>
        <p>{val}</p>
        <NewScreen />
      </>)
    })
  }
  return (
    <div className="App">
      {/* <NewScreen /> */}
      <h1 className="test-class">Hello World!</h1>
      <h2 style={{border: "1px solid red", marginTop: "38px"}}>Test Styling</h2>
      <input type="button" value/>
      {/* <NewScreen /> */}
      {/* {renderArr()} */}
      <TableProduct />
    </div>
  );
}

export default App;
