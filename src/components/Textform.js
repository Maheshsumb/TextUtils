import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked...")
    // setText("")
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    // console.log("UpperCase was clicked...")
    // setText("")
    setText(text.toLowerCase());
  };
  const handleCtClick = () => {
    // console.log("UpperCase was clicked...")
    setText("");
  };
  const handleOnChange = (event) => {
    // console.log("On change...")
    setText(event.target.value);
  };
  const handleCopy =()=>{
    let txt=document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
  }
  const handleExtraSpaces=()=>{
    let newTxt=text.split(/[ ]+/);
    setText(newTxt.join(" "));
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color:  props.mode==='light'?'#212129':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" class="form-label">
            Enter Text....
          </label>
          <textarea style={{backgroundColor:  props.mode==='light'?'white':'#212129',color:  props.mode==='light'?'#212129':'white'}}
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCtClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:  props.mode==='light'?'#212129':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>Required {0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in Textbox to preview"}</p>

      </div>
    </>
  );
}
