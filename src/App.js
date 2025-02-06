import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Users_class from "./Users_class";
import ClickAndFunctions from "./ClickAndFunctions";
import ClickAndFunctionsWithState from "./Click&FunctionWithState";
import Togle from "./Toggle_button";
import React, { useState } from "react";
import Toggle_button from "./Toggle_button";
import React_Form from "./ReactForm";
import Members from "./Members";
import ClassComponent from "./ClassComponent";
import Usestatehook from "./UseStateHook";
import Child from "./Child";
import HocImplementation from "./HocImplementation";
import Routing from "./Routing";
import DynamicRouting from "./DynamicRouting";

function App() {
  // function getData() {
  //     alert("hello from the APP.js file")
  // }

  function parentfunc(data) {
    alert("hello my name is "+data);
  }
  return (
    <div className="App">
      {/* <Child alert={parentfunc}/> */}
      {/* <Usestatehook/> */}
      {/* <ClassComponent/>, */}
     {/* <Members data={getData}/> */}
     {/* <HocImplementation/> */}
     {/* <Routing/> */}
     <DynamicRouting/>
    </div>
  );
}






// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   shouldComponentUpdate() {
//     console.log("in Should Update ", this.state.count);
//     if (this.state.count > 5 && this.state.count < 10) return true;
//   }
//   render() {
//     return (
//       <div>
//         <h1>Component DidUpdate: {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           Update Number
//         </button>
//       </div>
//     );
//   }
// }

export default App;
