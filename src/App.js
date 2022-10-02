import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
