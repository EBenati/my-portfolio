import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import HardSkills from './components/HardSkills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
   return (
    <BrowserRouter>
      <div className="App">
        <Navbar />      
        <Routes>
          <Route path='' element={<Home />}/> 
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
