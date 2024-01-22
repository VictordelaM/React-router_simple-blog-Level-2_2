import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Article from './components/article/Article'

function App() {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/blog'element={<Blog />} />
        <Route path='/blog/:id' element={<Article/>}/>
      </Routes>
    </>
  )
}

export default App
