import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


const Product = () => {
  const {isAuthor} = useContext(AuthContext);
  return (
    <div>Product : { isAuthor ? "LoggedIn" : "LoggedOut"}
    
    </div>
  )
}

export default Product