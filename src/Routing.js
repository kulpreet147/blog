import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
function Routing() {
  return (
    <div>
        <Nav/>
        {/* now we will be adding the pages to the above respective links */}
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  );
}

export default Routing;
