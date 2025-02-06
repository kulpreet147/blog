import { useState } from "react";

function HocImplementation() {
  return (
    <div>
      <h1>Higher Order Component Implementation</h1>
      {/* <Counter/>  */}
      {/* Here we want to add the more counters but every counter should be having some different properties so we need to wrap 
      them in HOC function */}
      
      <HocOrange cmp={Counter}/>
      <HocWhite cmp={Counter}/>
      <HocGreen cmp={Counter}/>
    </div>
  );

  function HocOrange(props) {
    return(
        <div>
            <h2 style={{backgroundColor:"orange"}}><props.cmp/></h2>
        </div>
    );
  }
  function HocWhite(props) {
    return(
        <div>
            <h2 style={{backgroundColor:"lightGrey"}}><props.cmp/></h2>
        </div>
    );
  }
  function HocGreen(props) {
    return(
        <div>
            <h2 style={{backgroundColor:"green"}}><props.cmp/></h2>
        </div>
    );
  }

  function Counter() {
    const [count, setcount] = useState(0);
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => setcount(count + 1)}>Update</button>
        <button onClick={() => setcount(0)}>Reset</button>
      </div>
    );
  }
}

export default HocImplementation;
