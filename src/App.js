import { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode]=useState('light'); //to show dark mode enable or not
  const toggleMode=()=>{
    if (mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#212129"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  
  return (
    <>
    <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform heading="Enter text to Analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
