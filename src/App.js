import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages
import {Home} from './pages/home/Home';
import {About} from './pages/about/About';


import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
