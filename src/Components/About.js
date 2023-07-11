import React, { useState } from "react";


export default function About() {
  
  
   const [myStyle,setMyStyle] = useState(
    {
      color: "balck",
      backgroundColor: "white",
    }
  );

  const [buttonStyle,setButtonStyle] = useState(
    {
      color: "white",
      backgroundColor: "black",
    }
  );

  const [buttonText,setButtonText] = useState("Dark Mode");
  
  

  const dark_light_button = ()=>{
    if(buttonText === "Dark Mode"){
      setMyStyle(
        {
          color: "white",
          backgroundColor: "black",
        }
      );
      setButtonStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Light Mode");
    }

    else{
      setMyStyle(
        {
          color: "black",
          backgroundColor: "white",
        }
      );

      setButtonStyle({
        color: "white",
        backgroundColor: "black",
      });
      setButtonText("Dark Mode");
    }
  }

  return (
    <>
      <div className="container mt-5" style={myStyle}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptates reiciendis voluptatum dolorum distinctio rerum excepturi
          optio voluptatem voluptate vitae laboriosam nam obcaecati facere nobis
          suscipit vel consectetur molestias ea ipsa officia molestiae velit ad
          similique! Explicabo quidem cum necessitatibus deleniti nam dolorum
          facere, a sint minus voluptatibus aliquid architecto quae consectetur
          exercitationem ea amet qui distinctio tempore molestias accusamus
          voluptate dolores ut sed. Est suscipit tempora doloremque consectetur
          sint hic non ipsum, neque repellendus obcaecati laboriosam quod ipsa
          facilis assumenda, sit dignissimos cupiditate. Pariatur beatae amet
          voluptate illo ipsa eveniet maxime autem molestias ratione, non eius!
          In, fuga alias.

        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptates reiciendis voluptatum dolorum distinctio rerum excepturi
          optio voluptatem voluptate vitae laboriosam nam obcaecati facere nobis
          suscipit vel consectetur molestias ea ipsa officia molestiae velit ad
          similique! Explicabo quidem cum necessitatibus deleniti nam dolorum
          facere, a sint minus voluptatibus aliquid architecto quae consectetur
          exercitationem ea amet qui distinctio tempore molestias accusamus
          voluptate dolores ut sed. Est suscipit tempora doloremque consectetur
          sint hic non ipsum, neque repellendus obcaecati laboriosam quod ipsa
          facilis assumenda, sit dignissimos cupiditate. Pariatur beatae amet
          voluptate illo ipsa eveniet maxime autem molestias ratione, non eius!
          In, fuga alias.
          
        </p>
      </div>

      <div className="container">
        <button 
        type="button"
        className="btn btn-outline-primary mt-4 fs-1"
        onClick={dark_light_button}
        style={buttonStyle}
        >
          {buttonText}
        </button>
      </div>

    </>
  );
}

