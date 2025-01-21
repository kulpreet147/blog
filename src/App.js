import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Users_class from "./Users_class";
import ClickAndFunctions from "./ClickAndFunctions";
import ClickAndFunctionsWithState from "./Click&FunctionWithState";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Users />
      <Users_class/>
      <ClickAndFunctions/>
      <ClickAndFunctionsWithState/>
    </div>
  );
}

export default App;
