import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'



const Navbar = () => {
  const {isAuthor,login,logout} = useContext(AuthContext);
  const {isLight,toggleTheme} = useContext(ThemeContext);

  return (
    <div>Navbar
      <button onClick={()=>{
      if(isAuthor) logout();
      else login("R", "Z")}}>{isAuthor ? "Logout" : "Login"}
      </button>
      <button onClick={toggleTheme}>{`make ${isLight ? "Dark" : "Light"}`}</button>
    </div>
  )
}

export default Navbar