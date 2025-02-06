import { useState } from "react";

function Usestatehook (){
    const [data,setData] = useState('Kulpreet');
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={() => setData('Singh')}>Update</button>
        </div>
    );
}

export default Usestatehook;