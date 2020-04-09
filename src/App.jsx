import React from "react";
import logo from "./logo.svg";
import NewScreen from "./views/screen/NewScreen";
import "./App.css";
import TableProduct from "./views/components/TableProduct";
import CounterScreen from "./views/screen/CounterScreen";
import ProductCard from "./views/components/ProductCard";

function App() {
  // let arr = ["Bandung", "Jakarta", "Tangerang"];
  let arrProducts = [
    {
      nama: 'Sepatu Basket',
      harga: 2300000,
      desc: 'Sepatu basket keluaran terbaru loh! Pakesepatu ini auto menang',
      discount: 20,
      stock: 10
    },
    {
      nama: 'Kaos Polo',
      harga: 250000,
      desc: 'Tingkatkan penampilanmu menggunakan kaos berkelas ini',
      discount: 40,
      stock: 0
    },
    {
      nama: 'Celana Jeans',
      harga: 550000,
      desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
      discount: 0,
      stock: 5
    }
  ]

  const renderArr = () => {
    // return arr.map(val => {
    //   return (
    //     <>
    //       <p>{val}</p>
    //       {/* <NewScreen /> */}
    //     </>
    //   );
    // });
    // return arr.map(val => {
    //   return <CounterScreen kota={val} />;
    // });
    return arrProducts.map(val => {
      // return <ProductCard nama={val.nama} harga={val.harga} desc={val.desc}/>
      return <ProductCard productData={val} />
    })
  };

  return (
    <div className="App">
      {/* <NewScreen /> */}
      {/* <h1 className="test-class">Hello World!</h1>
      <h2 style={{border: "1px solid red", marginTop: "38px"}}>Test Styling</h2>
      <input type="button" value/> */}
      {/* <NewScreen /> */}
      {/* {renderArr()} */}
      {/* <TableProduct /> */}
      {/* <CounterScreen terserah="kamu" nama="Bill"/> */}
      {/* <CounterScreen kota={renderArr()}/> */}
      {/* {renderArr()} */}
      <h1>Hello World!</h1>
      {/* <ProductCard /> */}
      {renderArr()}
    </div>
  );
}

export default App;
