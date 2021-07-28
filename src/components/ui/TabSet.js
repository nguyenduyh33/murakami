import { useState } from 'react';

import classes from './TabSet.module.css';

const TabSet = (props) => {
  const [activeTab, setActiveTab] = useState(
    props.children[0].props.name || ''
  );

  const tabSelectHandler = (tabName) => {
    setActiveTab(tabName);
  };

  const activeTabContent = props.children.find((tab) => {
    return tab.props.name === activeTab;
  }).props.content;

  const tabs = props.children.map((tab, idx) => {
    return (
      <button
        className={classes.tab}
        key={tab.props.name}
        onClick={() => tabSelectHandler(tab.props.name)}
        role="tab"
      >
        {tab.props.label}
        {activeTab === tab.props.name && (
          <span className={classes.inidicator}></span>
        )}
      </button>
    );
  });

  return (
    <div className={classes.container}>
      <nav className={classes['tab-set']} role="tablist">
        {tabs}
      </nav>
      <div className={classes.content}>{activeTabContent}</div>
    </div>
  );
};

export default TabSet;
