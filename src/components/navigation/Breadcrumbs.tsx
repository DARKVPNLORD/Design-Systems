import React from 'react';

export interface BreadcrumbItem {
  /**
   * Label to display for this breadcrumb
   */
  label: string;
  /**
   * URL to navigate to when clicked
   */
  href?: string;
  /**
   * Icon to display next to the label
   */
  icon?: React.ReactNode;
  /**
   * Whether this item is active/current
   */
  active?: boolean;
}

export interface BreadcrumbsProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator between items
   * @default '/'
   */
  separator?: React.ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Maximum items to show before collapsing
   * If provided and items.length > maxItems, will show first, last and ellipsis
   */
  maxItems?: number;
  /**
   * Function to handle item click
   */
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

/**
 * Breadcrumbs Component
 * Navigation component that shows the current location within the app hierarchy
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className = '',
  maxItems,
  onItemClick,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  // Handle collapsing breadcrumbs if maxItems is set
  const shouldCollapse = maxItems && items.length > maxItems;
  
  // Determine which items to display
  const displayedItems = shouldCollapse
    ? [
        // First item
        items[0],
        // Ellipsis (represented as a special breadcrumb)
        { label: '...', href: undefined, active: false },
        // Last few items based on maxItems
        ...items.slice(-(maxItems - 1)),
      ]
    : items;

  const handleClick = (item: BreadcrumbItem, index: number, e: React.MouseEvent) => {
    // If no href or active, prevent default navigation
    if (!item.href || item.active) {
      e.preventDefault();
    }
    
    // Call the onItemClick handler if provided
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className={`${className}`}>
      <ol className="flex items-center flex-wrap">
        {displayedItems.map((item, index) => {
          const isLast = index === displayedItems.length - 1;

          return (
            <li 
              key={`${item.label}-${index}`} 
              className={`flex items-center ${isLast ? '' : 'mr-2'}`}
            >
              {item.label === '...' ? (
                // Ellipsis item
                <span className="text-gray-500 dark:text-gray-400">...</span>
              ) : (
                // Regular breadcrumb item
                <>
                  {item.href && !item.active ? (
                    <a
                      href={item.href}
                      className={`
                        flex items-center text-sm hover:underline rounded
                        ${item.active 
                          ? 'font-medium text-text-primary dark:text-gray-200 cursor-default' 
                          : 'text-text-secondary dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'}
                      `}
                      aria-current={item.active ? 'page' : undefined}
                      onClick={(e) => handleClick(item, index, e)}
                    >
                      {item.icon && <span className="mr-1.5">{item.icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className={`
                        flex items-center text-sm
                        ${item.active 
                          ? 'font-medium text-text-primary dark:text-gray-200' 
                          : 'text-text-secondary dark:text-gray-400'}
                      `}
                      aria-current={item.active ? 'page' : undefined}
                    >
                      {item.icon && <span className="mr-1.5">{item.icon}</span>}
                      {item.label}
                    </span>
                  )}
                </>
              )}
              
              {!isLast && (
                <span className="mx-2 text-gray-400 dark:text-gray-600" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 