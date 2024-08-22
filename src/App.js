//import './App.css';

import React,{ useState } from "react";
import Navber from "./components/Navber";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMood = () => {
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
       document.body.style.backgroundColor = 'white'
       document.title = 'TextUtils - Light Mode'
    }
  }
  return (
   
    <>
    <BrowserRouter>
    <Navber title = "Textutils" mode = {mode} toggleMood = {toggleMood}/>
    <Alert alert={alert}/>
    {/* //if we don't pass props from this component to navber then it will take default props type */}
    {/* <Navber/> */}
    <div className="container my-3">
     
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your text to analyze" showAlert={showAlert} mode={mode} />} />
        <Route path="about" element={<About mode={mode}/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
