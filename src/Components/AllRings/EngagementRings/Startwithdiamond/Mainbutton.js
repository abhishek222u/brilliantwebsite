import React, { useState } from 'react'
import NaturalDiamonds from './NaturalDiamonds'
import LabDiamonds from './LabDiamonds';

const Mainbutton = () => {

  const [selectedDiamonds, setSelectedDiamonds] = useState('natural');

  function handleDiamondButtonClick(value) {
    setSelectedDiamonds(value)
  }

  return (
    <>
      {selectedDiamonds === 'natural' ? <NaturalDiamonds /> : <LabDiamonds />}
      <div className="diamondclass">
        <button onClick={() => handleDiamondButtonClick('natural')}>Natural Diamonds</button>
        <button onClick={() => handleDiamondButtonClick('lab')}>Lab Diamonds</button>
      </div>
    </>
  )
}
export default Mainbutton
