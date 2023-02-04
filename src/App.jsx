import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Post from './components/Post/Post';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/:id' element={<Post />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
