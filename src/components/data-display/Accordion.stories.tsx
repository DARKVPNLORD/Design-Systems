import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: { type: 'boolean' },
      description: 'Allow multiple accordion items to be open at once',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample accordion items for stories
const sampleItems = [
  {
    id: 'item-1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
  },
  {
    id: 'item-2',
    title: 'What is TypeScript?',
    content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
  },
  {
    id: 'item-3',
    title: 'What is Tailwind CSS?',
    content: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  },
  {
    id: 'item-4',
    title: 'What is Storybook?',
    content: 'Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
  },
};

// Dark mode preview
export const DarkModePreview: Story = {
  args: {
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Accordion component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: () => (
    <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Accordion items={sampleItems} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Accordion items={sampleItems} />
        </div>
      </div>
    </div>
  )
}; 