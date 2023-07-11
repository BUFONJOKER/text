import React, { useState } from "react";

export default function Textform(props) {

  
  const [text, setText] = useState("");

  const [char, setChar] = useState(0);

  const [words, setWords] = useState(0);
  
  const [emails,setEmails] = useState(0);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onUpperCaseButtonClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Text converted to UpperCase","success")
    
  };

  const onLowerCaseButtonClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Text converted to LowerCase","success")
  };

  const onWordsButtonClick = () => {
    let newWords = text.split(" ");
    
    let count;
    if(newWords[0] === ""){
      count = 0;
    }
    else{
      count = newWords.length;
    }
    setWords(count);
    
   
  };

  const onCharButtonClick = () => {
    let newChar = text.length;
    setChar(newChar);
  };

  const onClearButtonClick = () => {
    setChar(0);
    setText("");
    setWords(0);
    setEmails(0);
    props.showAlert("Text cleared","success")
  };

  const onEmailsButtonClick = () => {
    let totalEmail = 0;
    let newWords = text.split(" ");
    

    if(newWords[0] !== ""){
      for (let index = 0; index < newWords.length; index++) {
        if(newWords[index].includes("@") && newWords[index].includes(".com")){
          totalEmail+=1;
        }
        
      }
    }
    setEmails(totalEmail);
    
  };

  const onRemoveExtraSpaceButtonClick = ()=>{
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra Spaces Removed","success")

  };

  
  return (
    
    <div className={`bg-${props.mode}`}  >
      
      <div className="mb-3 mt-3 container "  >
        <label htmlFor="myBox" className={`form-label fs-2 text-${props.text_color}`}>
          {props.heading}
        </label>

        <textarea
          className={`form-control mt-2 bg-${props.mode} text-${props.text_color}`}
          id="myBox"
          rows="5"
          value={text}
          onChange={onChange}
        ></textarea>
      </div>

      <div className="container">
      
      <button
          type="button"
          className="btn btn-outline-primary fs-1 w-100 "
          onClick={onClearButtonClick}
        >
          Clear
        </button>

        <button
          type="button"
          className="btn btn-outline-primary fs-1 w-100 "
          onClick={onRemoveExtraSpaceButtonClick}
        >
          Remove Extra Space
        </button>

        <button
          type="button"
          className="btn btn-outline-primary m-4 fs-3"
          onClick={onWordsButtonClick}
        >
          Calculate Words in a text box
        </button>

       

        <div className="alert alert-info">
          <strong className="">{words} words in text box</strong>
        </div>


        <button
          type="button"
          className="btn btn-outline-primary m-4 fs-3 "
          onClick={onCharButtonClick}
        >
          Calculate Characters in a text box
        </button>

        <div className="alert alert-info">
          <strong>{char} characters in text box</strong>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary m-4 fs-3 "
          onClick={onEmailsButtonClick}
        >
          Calculate Emails in a text box
        </button>

        <div className="alert alert-info">
          <strong>{emails} emails in text box</strong>
        </div>

        <button
          type="button"
          className="btn btn-outline-primary m-4 fs-3"
          onClick={onUpperCaseButtonClick}
        >
          Convert to UpperCase
        </button>

        <button
          type="button"
          className="btn btn-outline-primary m-4 fs-3"
          onClick={onLowerCaseButtonClick}
        >
          Convert to LowerCase
        </button>

        <h1 className="text-center">PREVIEW</h1>

        <div className="alert alert-info">
          <strong>
            {
              text.length > 0 ? text:"Enter text to preview"
            }
          </strong>
        </div>

        

       

      </div>
    </div>
  );
}
