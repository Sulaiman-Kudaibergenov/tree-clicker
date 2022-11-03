import React, { useState, useContext } from 'react';
import svgs from '../images/tree.png'
import { UserContext } from '../UserContext'

const Tree = () => {
  const { user, setUser } = useContext(UserContext);
  
 
  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user))
    // setCounter(counter => counter + 1);
    setUser({ ...user, trees: user.trees + 1 })
    
    
  } 
  return (
      <div class="tree-container">
       <img onClick={handleClick} class="svgs" src={svgs} />
       <h2>{Math.trunc(user.trees)}</h2>
       <p>auto trees per second: {user.cps.toFixed(1)}</p>
    </div>
  )
}

export default Tree