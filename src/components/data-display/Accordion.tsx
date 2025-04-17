import React, { useState } from 'react';

export interface AccordionItemProps {
  /**
   * Unique identifier for the accordion item
   */
  id: string;
  /**
   * The title of the accordion item
   */
  title: React.ReactNode;
  /**
   * The content of the accordion item
   */
  content: React.ReactNode;
  /**
   * Whether the accordion item is open
   * @default false
   */
  isOpen?: boolean;
  /**
   * Callback when the accordion item is toggled
   */
  onToggle?: (id: string) => void;
}

export interface AccordionProps {
  /**
   * Array of accordion items
   */
  items: AccordionItemProps[];
  /**
   * Whether multiple items can be open at once
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * AccordionItem Component
 */
const AccordionItem = ({
  id,
  title,
  content,
  isOpen = false,
  onToggle,
}: AccordionItemProps) => {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(id);
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        id={`accordion-button-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="flex w-full justify-between py-4 px-4 text-left font-medium text-text-primary hover:bg-background-secondary transition-colors"
        onClick={handleToggle}
      >
        <span className="text-sm font-medium">{title}</span>
        <span className="ml-6 flex items-center">
          <svg
            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`accordion-content-${id}`}
        aria-labelledby={`accordion-button-${id}`}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        hidden={!isOpen}
      >
        <div className="py-4 px-4 text-sm text-text-secondary">{content}</div>
      </div>
    </div>
  );
};

/**
 * Accordion Component
 * Displays a list of items that can be expanded/collapsed
 */
export const Accordion = ({
  items,
  allowMultiple = false,
  className = '',
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`rounded-md border border-gray-200 dark:border-gray-700 bg-background-primary ${className}`} role="region">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openItems.includes(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion; 