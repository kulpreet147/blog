import { use, useState } from "react";

function ClickAndFunctionsWithState() {
    const [data,setdata] = useState('Kulpreet')
    const handlePress = () => {
        setdata('Preet')
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={handlePress}>Click Me</button>
        </div>
    );
}

export default ClickAndFunctionsWithState;