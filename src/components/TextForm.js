import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    if (text.length <= 0){
      props.showAlert("Please enter some text for utility" ,"warning")
    }

    else{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case !" , "success")
    }
  };

  const clearText = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared" ,"success")
  }

  const handleLoClick = () => {
    // console.log("Upper case was clicked");
    if (text.length <= 0){
      props.showAlert("Please enter some text for utility" ,"warning")
    }

    else{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case !" , "success")
    }

  };
  const handleVowelClick = () => {
    let newCount = text.match(/[aeiou]/gi).length;
    setVowels(newCount);

  };

  const handleCopy = () => {
    var text = document.getElementById('myBox')
    if (text.value.length <= 0){
      props.showAlert("Please enter some text to be copied" ,"warning")
    }
    else{
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to your clipboard !" ,"success")
  }
  }

  

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };




  const [text, setText] = useState("");
  const[count , setVowels] = useState(0);
  // text= "Some value" Wrong way to change state
  // setText("new val") Correct way
  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          <h1 className="display-3">{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode=== 'dark'?'#212529':'white' , color: props.mode === 'dark'?'white':'black'}}
          id="myBox"
          rows="7"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className={`btn btn-${props.mode=== 'dark'?'outline-primary' : "primary"}`} onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className={`btn btn-${props.mode=== 'dark'?'outline-primary' : "primary"} mx-2`} onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className={`btn btn-${props.mode=== 'dark'?'outline-primary' : "primary"} mx-2`} onClick={handleVowelClick}>
        Count Vowels
      </button>
      <button className={`btn btn-${props.mode=== 'dark'?'outline-primary' : "primary"} mx-2`} onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-danger mx-2" onClick={clearText}>
        Clear Text
      </button>
     
    </div>
    <div className="container my-3">
        <h2 className="display-5">Text summary</h2>
        <p className="lead"><b>{text.split(" ").length}</b> words and <b>{text.length} characters</b></p>
        <p className="lead"> You can read in <b>{0.008 * text.split(" ").length}</b> minutes </p>
        <p className="lead"> No. of Vowels : <b>{count}</b></p>
        <h4 className="display-6">Preview</h4>
        <p className="lead">{text.length>0?text:'Enter text to preview'}</p>

    </div>
    </>

  );
}
