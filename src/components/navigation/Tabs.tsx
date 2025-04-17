import React, { useState } from 'react';

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * The label of the tab
   */
  label: React.ReactNode;
  /**
   * The content of the tab
   */
  content: React.ReactNode;
  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tab items
   */
  tabs: TabItem[];
  /**
   * Default active tab ID
   */
  defaultActiveTab?: string;
  /**
   * Callback when a tab is selected
   */
  onTabChange?: (tabId: string) => void;
  /**
   * Additional CSS class name for the tabs container
   */
  className?: string;
  /**
   * Orientation of the tabs
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * Tabs Component
 * A navigation component that allows switching between different content sections
 */
export const Tabs = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
  orientation = 'horizontal',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : '')
  );

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const isVertical = orientation === 'vertical';

  return (
    <div className={`${className} ${isVertical ? 'flex flex-row' : ''}`}>
      {/* Tab List */}
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`
          ${isVertical 
            ? 'flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4 space-y-2'
            : 'flex flex-row border-b border-gray-200 dark:border-gray-700 space-x-8'
          }
        `}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && handleTabChange(tab.id)}
            className={`
              py-2 px-1 text-sm font-medium
              ${tab.disabled ? 'cursor-not-allowed text-gray-400 dark:text-gray-600' : 'cursor-pointer'}
              ${activeTab === tab.id 
                ? 'text-primary-600 dark:text-primary-400 border-primary-500' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }
              ${isVertical 
                ? `text-left ${activeTab === tab.id ? 'border-r-2 -mr-[17px]' : ''}`
                : `${activeTab === tab.id ? 'border-b-2 -mb-[1px]' : ''}`
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className={`${isVertical ? 'ml-8 flex-1' : 'mt-4'}`}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'animate-fadeIn' : ''}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs; 