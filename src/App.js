import './App.css';
import React from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b0d0e';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled ", "success");




    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled ", "success");
      // document.title = "Text Utility - Light Mode"

    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} title="Text Utility" />
      </div>
      {/* <Routes>
          <Route exact path="/about" element={<About />}/>  
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} title="Text Utility"/>}/>
      </Routes>   */}
      {/* </Router> */}





    </>
  );


}

export default App;
