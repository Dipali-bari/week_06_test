import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import {useSelector, useDispatch} from 'react-redux';
import { toggleDarkMode } from './features/darkModeSlice';
function App() {
  const {mode} = useSelector((state)=>state.darkMode);
  const dispatch= useDispatch();
  return (
    <div style={{background: mode? 'black': 'white', color:mode? 'white':'blue', height:"80vh"}}>
      
    <Router>
      <h3>Change Theme Project</h3>
      <Header/>
      <button onClick={()=>dispatch(toggleDarkMode())}>Change the theam</button>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
