import React, { useState } from 'react'

export default function Textform(props) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }
    const handleOnClick = () => {
        // console.log("on click");
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change" + text);
        setText(event.target.value);      
    }

    const [text, setText] = useState('set text');
    const removeSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <><div className='container' style =  {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}}>
            <h1 >{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" style =  {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={removeSpaces}> Remove Extra Spaces</button>

        </div>
        <div className="container my-3" >
            <h6>Text Summary </h6>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>calculated in {text.length * 0.008} minutes</p>
       
        </div>
        </>
        
    )
}
