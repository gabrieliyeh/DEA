import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer/>
    <ScrollToTop/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
