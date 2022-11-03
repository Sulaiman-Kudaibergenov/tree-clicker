import { useEffect, useState } from 'react';
import './App.css';
import BonusList from './components/BonusList';
import Tree from './components/Tree.js';
import {UserContext} from './UserContext'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || { trees: 0, cps: 0 })
  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      setUser((user) => {
        return {...user, trees: user.trees + user.cps}
      })
    }, 1000)
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Tree />
      <hr></hr>
      <BonusList/>
    </UserContext.Provider>
  );
}

export default App;
