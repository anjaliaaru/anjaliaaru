import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick = ()=>{
       // console.log("Upercase was clicked");
       let newText =text.toUpperCase();
       setText(newText);
    }
    const handleLoClick = ()=>{
      //console.log("Upercase was clicked");
     let newText =text.toLowerCase();
     setText(newText);
    }
     const handleClearClick = ()=>{
      //console.log("Upercase was clicked");
     let newText ="";
     setText(newText);
  }
    const handleOnChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);
    }
    const handleCopy=()=>{
     
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExrtaSpace= ()=>{
     let newText= text.split(/[ ]+/);
     setText(newText.join(" "))
    }

    const[text, setText] = useState(' ');

  return (
<div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#001d39':'light'}} id="myBox" row="8"></textarea>
    <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2  my-1" onClick={handleLoClick}>convert to lowerrcase</button>
    <button className="btn btn-primary mx-2  my-1" onClick={handleClearClick}>clear text</button>
    <button className="btn btn-primary mx-2  my-1" onClick={handleCopy}>copy text</button>
    <button className="btn btn-primary mx-2  my-1" onClick={handleExrtaSpace}>remove extra space</button>
    
  </div> 
  
<div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summery</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length}minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
  </div>
 
  )
}
