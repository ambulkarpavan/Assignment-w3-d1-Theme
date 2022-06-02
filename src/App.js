
import { useContext } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
// import { ThemeContext } from "./context/ThemeContex";
import Products from './components/Products'
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`} >
      <Navbar />
      <Form />
      <Products/>
    
    </div>
  );
}

export default App;
