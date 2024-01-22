import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/blog'element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
