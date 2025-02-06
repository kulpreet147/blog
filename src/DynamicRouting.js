import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
function DynamicRouting() {

    let users = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        { id: 3, name: "Bob", age: 35 },
        { id: 4, name: "Blob", age: 40 },
        { id: 5, name: "Tap", age: 45 },
        { id: 6, name: "zoi", age: 50 },
        { id: 7, name: "pot", age: 55 },
        { id: 8, name: "Mal", age: 60 },
        { id: 9, name: "rey", age: 65 },
    ]
  return (
    <div>
        <h3>Dynamic Routing</h3>
        {users.map((item) => (
          <div key={item.id}><Link to={"/users" + item.id}> {item.name}</Link></div>
        ))}


        {/* <Nav/> */}


        {/* now we will be adding the pages to the above respective links */}
        <Routes>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route> */}
        </Routes>
    </div>
  );
}

export default DynamicRouting;