import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import CreateEvent from './components/CreateEvent';
// import Reservation from './components/Reservation';
import EventDetail from './components/EventDetail';
import EventReservation from './components/EventReservation';

function App() {
  return (
    <div >
  <NavBar/>
  
    
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/events' element={<EventDetail/>}/>
    <Route path='/seats' element={<EventReservation/>}/>



    </Routes>
    
    
          
    </div>
  );
}

export default App;
