import React, { Component } from "react";

// const CounterScreen = (props) => {
//   return (
//     <div>
//       {/* <h1>Hello!</h1> */}
//   <h1>{props.kota}</h1>
//     </div>
//   );
// };

class CounterScreen extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Hello!</h1> */}
        {/* <h1>{this.props.terserah}</h1>
        <h1>{this.props.nama}</h1> */}
        {/* {this.props.kota} */}
        <h1>{this.props.kota}</h1>
      </div>
    );
  }
}

export default CounterScreen;
