import React, { useState } from "react";

export default function About() {
    
 const[myStyle,setmyStyle]= useState({
 color:"black",
 backgroundColor:'white'
})
const [btntext, setBtnText]=useState("Enable dark Mode")
 const toggleStyle=()=>{
   
    if(myStyle.color === 'white'){
        setmyStyle({
            color:"black",
 backgroundColor:'white',
 border: '2px solid white'
        })
        setBtnText("Enable dark Mode");
    }
    
else{
    setmyStyle({
        color:"white",
 backgroundColor:'black'
    })
    setBtnText("Enable light Mode");
}
}
  return (
  <div className="container" style={myStyle}>
    <h1 className="my-3">About us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"style={myStyle} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree"style={myStyle} className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div> 
<div className="my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btntext}</button></div>

  </div>
  )
}
