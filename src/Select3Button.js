import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function SelectThreeButtons({matrix, matrix1, selectedButtons, setSelectedButtons}) {
  
  const n = matrix[0] === undefined? 0: matrix[0].length
  const n2= matrix1.length
  const handleButtonClick = (button) => {
    // Check if button is already selected
    const isSelected = selectedButtons.includes(button);
    if (isSelected) {
      // If button is already selected, unselect it
      setSelectedButtons(selectedButtons.filter((b) => b !== button));
    } else {
      // If button is not selected, add it to selectedButtons
      // and unselect the oldest selected button if there are already 3 selected
      setSelectedButtons((prevSelectedButtons) => {
        if (prevSelectedButtons.length === n2) {
          prevSelectedButtons.shift();
        }
        return [...prevSelectedButtons, button];
      });
    }
  };

  return (
    <div>
      {Array.from({ length: n }, (_, index) => index + 1).map((button) => (
        <Button
          key={button}
          variant={selectedButtons.includes(button) ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </Button>
      ))}
    </div>
  );
}
export default SelectThreeButtons;