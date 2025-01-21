function ClickAndFunctions() {
    let data = "Kulpreet"
    function handleClick() {
        data = "Preet"
        alert(data);
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default ClickAndFunctions;

//Ambigious Code 
//the value of data inside the handleClick function and what gets displayed 
// in the h1 are not connected because data is a local variable, not a state variable managed by React.