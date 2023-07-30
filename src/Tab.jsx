
import React, { useState } from 'react';

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    if (!tabs[index].disabled) {
      setActiveTab(index);
    }
  };

  return (
    <div className="">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
