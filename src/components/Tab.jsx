import React, { useState } from 'react';


const Tab = ({ children, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className='custom-tab-cover'>
      <div className="tab-headers">
        {React.Children.map(children, (child, index) => (
          <button
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tab;
