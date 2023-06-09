import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import {Home} from './pages/home/Home';
import {About} from './pages/about/About';


import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
