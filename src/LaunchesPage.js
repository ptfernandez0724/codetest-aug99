import React, {useState} from 'react';
import Data from './Data';



export default function Launches(){
    const [input, setInput] = useState("")

    function handleChange(e){
        const { value } = e.target
        setInput(value)
    }

    return(
        <div>
            <h1>Launches</h1>
            <input placeholder="input search here" value={input} onChange={handleChange} />
            <button>Search</button>

            <Data />
        </div>
    )
}