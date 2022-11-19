import './App.scss';
import { Routes, Route } from 'react-router-dom';
//import Home from './components/Home';
import Casa from './components/Casa';
import About from './components/About';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ReactGA from 'react-ga';
import PageNotFound from './components/PageNotFound';

// Google Analtyics
const TRACKING_ID = 'G-LGXX8PM9LM';
ReactGA.initialize(TRACKING_ID);
// End of snippet for Google Analytics

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Casa />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
