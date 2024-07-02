import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light'); //to show dark mode enable or not
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setInterval(()=>{
      setAlert(null)
    }, 2000)
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#212129"
      showAlert("Dark Mode enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode enabled","success")
    }
  }
  return (
    <>
    <Router>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter text to Analyze below"  mode={mode}/>} />
    <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
