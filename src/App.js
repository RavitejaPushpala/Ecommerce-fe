import './App.css';
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil';
function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <div className='page'>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='products/:id' element={<Products />}></Route>
          </Routes>
        </div>

      </QueryClientProvider>

    </RecoilRoot>



  );
}

export default App;
