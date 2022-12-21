import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/About/AboutMe';
import HardSkills from './Pages/HardSkills/HardSkills';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Projects from './Pages/Projects/Projects';
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
