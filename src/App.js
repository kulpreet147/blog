import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Users_class from "./Users_class";
import ClickAndFunctions from "./ClickAndFunctions";
import ClickAndFunctionsWithState from "./Click&FunctionWithState";
import Togle from "./Toggle_button";
import { useState } from "react";
import Toggle_button from "./Toggle_button";
import React_Form from "./ReactForm";

function App() {
  const [show, setshow] = useState(true);

  return (
    <div className="App">
     <React_Form/>
    </div>
  );
}

export default App;
