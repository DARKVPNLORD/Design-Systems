import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Badge Component

Badges are used to highlight status, show counts, or categorize items in a visually distinctive way.

### Key Features
- Multiple color variants for different contextual purposes
- Size options to fit different UI contexts
- Pill shape option for rounded appearance
- Outline style for more subtle presentation
- Dot indicator for status visualization
- Dark mode compatibility out of the box
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error'],
      description: 'The visual style of the badge',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    withDot: {
      control: 'boolean',
      description: 'Show a dot indicator before the content',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    pill: {
      control: 'boolean',
      description: 'Make badge pill shaped (more rounded)',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    outline: {
      control: 'boolean',
      description: 'Make badge outline style',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    children: {
      control: 'text',
      description: 'Badge content'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic badge
export const Default: Story = {
  args: {
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default badge with primary styling and standard rounded corners.'
      }
    }
  }
};

// Variants
export const Variants: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">Primary</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="tertiary">Tertiary</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="info">Info</Badge>
      <Badge {...args} variant="warning">Warning</Badge>
      <Badge {...args} variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Color Variants
Each variant is designed for specific purposes:
- **Primary**: Default variant, for general highlights
- **Secondary**: For complementary or secondary information
- **Tertiary**: For tertiary level information
- **Success**: For positive states or completion
- **Info**: For informational or neutral states
- **Warning**: For warning states that need attention
- **Error**: For error states or critical information
        `
      }
    }
  }
};

// Sizes
export const Sizes: Story = {
  args: {
    children: 'Badge',
    variant: 'primary',
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
      <Badge {...args} size="lg">Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges come in three sizes to fit different UI contexts - small (sm), medium (md), and large (lg). Choose the appropriate size based on where the badge appears and its relative importance.'
      }
    }
  }
};

// With dot indicator
export const WithDot: Story = {
  args: {
    children: 'Badge',
    withDot: true,
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">Primary</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="error">Error</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adding a dot indicator to badges enhances their visibility and is particularly useful for status indicators. The dot color matches the badge variant.'
      }
    }
  }
};

// Pill shaped
export const Pill: Story = {
  args: {
    children: 'Badge',
    pill: true,
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args}>Default Pill</Badge>
      <Badge {...args} variant="secondary">Secondary Pill</Badge>
      <Badge {...args} variant="success">Success Pill</Badge>
      <Badge {...args} size="lg">Large Pill</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pill-shaped badges have fully rounded ends, giving them a softer appearance. These are often used for tags, counts, or status indicators where a more button-like appearance is desired.'
      }
    }
  }
};

// Outline style
export const Outline: Story = {
  args: {
    children: 'Badge',
    outline: true,
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args}>Primary Outline</Badge>
      <Badge {...args} variant="secondary">Secondary Outline</Badge>
      <Badge {...args} variant="success">Success Outline</Badge>
      <Badge {...args} variant="error">Error Outline</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline badges have a transparent background with a colored border. They are less visually prominent than filled badges and work well in interfaces where you want to maintain a lighter appearance.'
      }
    }
  }
};

// Combined features
export const Combined: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args} pill withDot variant="primary">Primary Pill with Dot</Badge>
      <Badge {...args} pill outline variant="secondary">Secondary Outline Pill</Badge>
      <Badge {...args} outline withDot variant="success" size="lg">Success Outline with Dot</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge properties can be combined for even more customization. This example shows badges with multiple properties combined.'
      }
    }
  }
};

// Dark mode preview
export const DarkModePreview: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="primary">Primary</Badge>
          <Badge {...args} variant="success" withDot>Active</Badge>
          <Badge {...args} variant="error" pill>42</Badge>
          <Badge {...args} variant="info" outline>New</Badge>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode Preview</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="primary">Primary</Badge>
          <Badge {...args} variant="success" withDot>Active</Badge>
          <Badge {...args} variant="error" pill>42</Badge>
          <Badge {...args} variant="info" outline>New</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges are designed to work in both light and dark modes. This example shows how badges appear in dark mode vs light mode contexts.'
      }
    }
  }
};

// With numbers
export const WithNumbers: Story = {
  args: {
    children: '42',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">42</Badge>
      <Badge {...args} variant="secondary" pill>99+</Badge>
      <Badge {...args} variant="error" size="sm" pill>7</Badge>
      <Badge {...args} variant="info" outline>New</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges are commonly used to display counts, such as notification counts. This example shows number badges in different styles.'
      }
    }
  }
};

// Real-world usage examples
export const UsageExamples: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => (
    <div className="space-y-6 max-w-xl">
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Notification Center</h3>
          <Badge {...args} variant="error" pill>3</Badge>
        </div>
        <div className="space-y-3">
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">New message from support team</div>
            <Badge {...args} variant="primary" size="sm">New</Badge>
          </div>
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">Your subscription will expire soon</div>
            <Badge {...args} variant="warning" size="sm">Action Needed</Badge>
          </div>
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">Weekly report is available</div>
            <Badge {...args} variant="info" size="sm">Info</Badge>
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Product Status</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>Server Status</span>
              <Badge {...args} variant="success" withDot>Online</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>Database</span>
              <Badge {...args} variant="warning" withDot>Maintenance</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>API Status</span>
              <Badge {...args} variant="error" withDot>Degraded</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>CDN Status</span>
              <Badge {...args} variant="success" withDot>Operational</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'These examples demonstrate common real-world usage patterns for badges, including notification indicators and status displays.'
      }
    }
  }
};

// Accessibility notes
export const AccessibilityExample: Story = {
  args: {
    children: 'Badge',
  },
  parameters: {
    docs: {
      description: {
        story: 'Badges should have sufficient color contrast and not be used alone to convey important information. Always ensure that the meaning is clear from context or add explicit labels for screen readers.'
      }
    }
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center">
        <span className="mr-2">Notifications:</span>
        <Badge {...args} variant="error" aria-label="5 unread notifications">5</Badge>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Status:</span>
        <Badge {...args} variant="success" withDot aria-label="Status is active">Active</Badge>
      </div>
    </div>
  )
};

// Practical Usage Examples
export const PracticalUseCases: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-md">
      {/* Notification counter */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Notification Counter</h3>
        <div className="relative inline-block">
          <button className="p-2 rounded-full border border-gray-200 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <Badge variant="error" pill size="sm" className="absolute -top-1 -right-1">8</Badge>
        </div>
      </div>
      
      {/* Status in a list */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Status in a List</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b pb-2">
            <span>Server Status</span>
            <Badge variant="success" size="sm">Online</Badge>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <span>Database</span>
            <Badge variant="warning" size="sm">Degraded</Badge>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span>Storage</span>
            <Badge variant="error" size="sm">Offline</Badge>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Category Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" pill outline>Design</Badge>
          <Badge variant="secondary" pill outline>Development</Badge>
          <Badge variant="tertiary" pill outline>Marketing</Badge>
          <Badge variant="info" pill outline>Research</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'These examples demonstrate common real-world applications of the Badge component.'
      }
    }
  }
};

// Dark Mode Comparison for Badges
export const DarkModeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 max-w-2xl">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4">Light Mode</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4 text-white">Dark Mode</h3>
        <div className="space-y-4 dark">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This comparison shows badge appearance in light and dark modes, highlighting the enhanced contrast in dark mode.'
      }
    }
  }
}; 