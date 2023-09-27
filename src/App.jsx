
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
