
import React, { useState } from 'react';
import LaraAiChat from "./LaraAiChat";


const TabContent1 = ({ onTab1Complete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    onTab1Complete(e.target.checked);
  };

  return (
    <div>
      <h2>TabContent1</h2>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Checkbox to complete Tab 1
        <LaraAiChat/>
      </label>
    </div>
  );
};

export default TabContent1;

