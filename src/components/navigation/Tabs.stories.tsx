import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tab items for stories
const sampleTabs = [
  {
    id: 'tab1',
    label: 'Account',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Account Settings</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Manage your account settings and preferences.
        </p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Password',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Password</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Change your password and security settings.
        </p>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Notifications',
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Notifications</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Configure how you receive notifications.
        </p>
      </div>
    ),
  },
  {
    id: 'tab4',
    label: 'Disabled',
    content: <div className="p-4">Disabled tab content</div>,
    disabled: true,
  },
];

export const Horizontal: Story = {
  args: {
    tabs: sampleTabs,
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    tabs: sampleTabs,
    orientation: 'vertical',
  },
};

// Dark mode preview
export const DarkModePreview: Story = {
  args: {
    tabs: sampleTabs,
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Tabs component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Tabs {...args} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Tabs {...args} />
        </div>
      </div>
    </div>
  )
};