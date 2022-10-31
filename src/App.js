import './App.css';
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './bases/Navbar';
import Footer from './bases/Footer';

function App() {
  return (
    <>
    <div className='App' style={{ boxSizin: 'border-box' }}>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
           <Footer /> 
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;