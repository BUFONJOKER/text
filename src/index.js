import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState } from 'react';

export default function App() {

  const [mode, setMode] = useState("light");

  const [navBarColor, setNavBarColor] = useState("white");

  const [modeText, setModeText] = useState("Enable dark mode");

  const [text_color, setTextColor] = useState("dark");

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const switchButtonClicked = () => {
    if (mode === "dark") {
      setMode("light");
      setTextColor("dark");
      setModeText("Enable dark mode");
      document.body.style.backgroundColor = "#f8f9fa";
      setNavBarColor("white");
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode Enabled";
      // setInterval(() => {
      //   document.title = "TextUtils-Light Mode Enabled";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Light Mode Enabled";
      // }, 1500);
    } 
    
    else {
      setMode("dark");
      setTextColor("white");
      setModeText("Enable light mode");
      document.body.style.backgroundColor = "#212529";
      setNavBarColor("black");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode Enabled";
    }
  };

 

  return (
    <>
      

      


       

{/* 
      <Navbar
        mode={mode}
        navBarColor={navBarColor}
        modeText={modeText}
        text_color={text_color}
        switchButtonClicked={switchButtonClicked}
      />
      <Textform
        showAlert={showAlert}
        heading="Enter text to analyze"
        mode={mode}
        text_color={text_color}
      />
    <About />
      <Alert alert={alert} /> */}

      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar 
                                mode={mode}
                                navBarColor={navBarColor}
                                modeText={modeText}
                                text_color={text_color}
                                switchButtonClicked={switchButtonClicked} />}>
          <Route index element={<Textform showAlert={showAlert}
                                heading="Enter text to analyze"
                                mode={mode}
                                text_color={text_color}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/alert" element={<Alert alert={alert}/>} />
     
        </Route>
      </Routes>
    </BrowserRouter>

      
    


     
   

    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App/>

  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
