
import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling
import Tab from "./Tab";
import TabContent1 from "./components/TabContent1";
import TabContent2 from "./components/TabContent2";
import TabContent3 from "./components/TabContent3";

const App = () => {
  const [isTab1Complete, setTab1Complete] = useState(false);
  const [isTab2CheckboxChecked, setTab2CheckboxChecked] = useState(false);

  const handleTab1Complete = (isChecked) => {
    setTab1Complete(isChecked);
  };

  const handleTab2CheckboxChange = (isChecked) => {
    setTab2CheckboxChecked(isChecked);
  };

  const tabsData = [
    { label: "Tab 1", content: <TabContent1 onTab1Complete={handleTab1Complete} />, disabled: false },
    { label: "Tab 2", content: isTab1Complete ? <TabContent2 onTab2CheckboxChange={handleTab2CheckboxChange} /> : null, disabled: !isTab1Complete },
    { label: "Tab 3", content: isTab2CheckboxChecked ? <TabContent3 /> : null, disabled: !isTab2CheckboxChecked },
  ];

  return (
    <div className="">
      <h1>Tab Component Example</h1>
      <Tab tabs={tabsData} />
    </div>
  );
};

export default App;
