import React from 'react'
import Bonus from './Bonus'
import snow from '../images/snowman.png'
import elf from '../images/elf.png'
import santa from '../images/santa.png'


const BonusList = () => {
  return (
      <div className="bonus-list">
          <Bonus name="Snow" src={snow} price={10} cps={0.2} />
          <Bonus name="Elf" src={elf} price={50} cps={0.4} />
          <Bonus name="Santa" src={santa} price={200} cps={0.7} />
    </div>
  )
}

export default BonusList