import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import HardSkills from './components/HardSkills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  //Time

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setDate(new Date())
  },[date])
  
   return (
    <BrowserRouter>
      <div className="App">
        <Navbar />      
        <Routes>
          <Route path='' element={<Home
          time={date.toLocaleTimeString()} 
          />}/> 
          <Route path='/aboutMe' element={<AboutMe />}/>
          <Route path='/hardskills' element={<HardSkills />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
