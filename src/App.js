import logo from './logo.svg';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Products from './components/Products';

function App() {
  return (
   <>
   <Navbar />
   <Home />
   <About />
   <Menu />
   <Products />
   <Contact />
   </>
  );
}

export default App;
