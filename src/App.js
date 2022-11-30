import './App.css';
import {Routes , Route} from 'react-router-dom'
import Products from './Components/Products';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='page'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Products/:id' element={<Products/>}></Route>
    </Routes>
    
    </div>
    
  );
}

export default App;
