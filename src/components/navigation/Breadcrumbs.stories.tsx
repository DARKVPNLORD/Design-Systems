import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Breadcrumbs component that shows the current location within the app hierarchy.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items'
    },
    separator: {
      control: 'text',
      description: 'Custom separator between items',
      table: {
        defaultValue: { summary: '/' }
      }
    },
    maxItems: {
      control: 'number',
      description: 'Maximum items to show before collapsing'
    },
    onItemClick: {
      action: 'clicked',
      description: 'Function to handle item click'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// Basic breadcrumbs
export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page', active: true }
    ]
  }
};

// Custom separator
export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page', active: true }
    ],
    separator: '>'
  }
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs
      items={[
        { 
          label: 'Home', 
          href: '#', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ) 
        },
        { 
          label: 'Settings', 
          href: '#', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) 
        },
        { 
          label: 'Profile', 
          href: '#', 
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        { 
          label: 'Security', 
          active: true,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        }
      ]}
    />
  )
};

// Collapsed breadcrumbs
export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Subcategory', href: '#' },
      { label: 'Item Type', href: '#' },
      { label: 'Item Model', href: '#' },
      { label: 'Current Item', active: true }
    ],
    maxItems: 4
  }
};

// Responsive behavior
export const Responsive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The breadcrumbs component is designed to wrap on smaller screens and maintain readability.'
      }
    }
  },
  render: () => (
    <div className="w-full max-w-md">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '#' },
          { label: 'Category', href: '#' },
          { label: 'Subcategory', href: '#' },
          { label: 'Product Type', href: '#' },
          { label: 'Product Name With Long Text', active: true }
        ]}
      />
    </div>
  )
};

// Dark mode preview
export const DarkModePreview: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Category', href: '#' },
      { label: 'Current Page', active: true }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Breadcrumbs component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Breadcrumbs {...args} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Breadcrumbs {...args} />
        </div>
      </div>
    </div>
  )
};

// Accessibility example
export const AccessibilityExample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs are implemented with proper ARIA attributes for accessibility. The active/current page is marked with aria-current="page".'
      }
    }
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-base font-medium mb-2">Standard Breadcrumbs</h3>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current Page', active: true }
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-medium mb-2">Keyboard Navigation</h3>
        <p className="text-sm mb-2">Tab through the breadcrumbs to see focus styles</p>
        <Breadcrumbs
          items={[
            { label: 'Dashboard', href: '#' },
            { label: 'Settings', href: '#' },
            { label: 'Account', active: true }
          ]}
        />
      </div>
    </div>
  )
};