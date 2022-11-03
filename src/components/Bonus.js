import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext'

const Bonus = ({ src, name = "bonus", price = 1, cps = 0.1 }) => {
    const { user, setUser } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(price > user.trees)
    }, [user])

    const buyBonus = () => {
        if (disabled) {
            return;
        }
        setUser({ ...user, cps: user.cps + cps, trees: user.trees - price })
    }; 
    

  return (
      <div className={`bonus ${disabled? "disabled" : null}` }style={{
        opacity: disabled ? "0.2" : "1",
      }}>
          <img onClick={buyBonus}className='bonus-image' src={src} />
          <h3>{name}</h3>
          <p>price : {price}</p>
          <p>bonus : +{cps}</p>
      </div>
  )
}

export default Bonus