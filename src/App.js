import 'C:\\Users\\shace\\OneDrive\\Desktop\\try\\my-app\\src\\App.js';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function App ()   {
  const[mode,setMode]=useState("dark");
  const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
setAlert(
  {
    msg:message,
    type:type

  }
);
}
  const toggleMode=()=>{
if (mode==='dark') {
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode has been enabled","success");
} else {
  setMode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("dark mode has been enabled","success");
}
  }

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );


};

export default App;