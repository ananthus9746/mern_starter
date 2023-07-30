

import  { useState } from 'react';
import LaraAiChat from './LaraAiChat';

const TabContent2 = ({ onTab2CheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    onTab2CheckboxChange(e.target.checked);
  };

  return (
    <div>
      <h2>TabContent2</h2>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <LaraAiChat/>
        Checkbox to enable Tab 3
      </label>
    </div>
  );
};

export default TabContent2;
