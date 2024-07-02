import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked...")
    // setText("")
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case","success")
  };
  const handleLoClick = () => {
    // console.log("UpperCase was clicked...")
    // setText("")
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case","success")
  };
  const handleCtClick = () => {
    // console.log("UpperCase was clicked...")
    setText("");
    props.showAlert("Text is cleared","warning")
  };
  const handleOnChange = (event) => {
    // console.log("On change...")
    setText(event.target.value);
  };
  const handleCopy =()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges()
    props.showAlert("Text copied to clipboard","success")
  }
  const handleExtraSpaces=()=>{
    let newTxt=text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert("Cleared extra spaces","success")
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
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={handleCtClick}>
          Clear Text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:  props.mode==='light'?'#212129':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} word and {text.length} characters</p>
        <p>Required {0.008*text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

      </div>
    </>
  );
}
