# Enterprise B2B Design System Documentation

## Overview

This documentation provides a comprehensive guide to using our Enterprise B2B Design System, built with React, TypeScript, TailwindCSS, and Storybook. The system is designed to provide a consistent, accessible, and customizable set of components for enterprise B2B applications.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Color System](#color-system)
3. [Components](#components)
   - [Data Display Components](#data-display-components)
   - [Navigation Components](#navigation-components)
   - [UI Components](#ui-components)
4. [Theming](#theming)
5. [Accessibility](#accessibility)
6. [Best Practices](#best-practices)

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-project.git
cd my-project

# Install dependencies
npm install

# Run the development server
npm run dev

# Launch Storybook
npm run storybook
```

### Basic Usage

Import components in your React application:

```jsx
import { Button, Accordion, Badge } from 'my-project';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      
      <Badge variant="success">New</Badge>
      
      <Accordion 
        items={[
          { id: '1', title: 'Section 1', content: 'Content for section 1' },
          { id: '2', title: 'Section 2', content: 'Content for section 2' }
        ]} 
      />
    </div>
  );
}
```

## Color System

Our color system is built on a token-based approach that supports both light and dark themes through CSS variables.

### Primary Colors

The primary color palette is used for main actions, buttons, and key UI elements.

### Secondary Colors

The secondary color palette is used for supporting elements, highlights, and secondary actions.

### Tertiary Colors

The tertiary color palette is used for accents and less prominent UI elements.

### Semantic Colors

- **Success**: Used for successful actions, completion, and positive feedback
- **Info**: Used for informational messages and neutral notifications
- **Warning**: Used for warnings and actions that require attention
- **Error**: Used for errors, failures, and destructive actions

## Components

### Data Display Components

#### Accordion

The Accordion component is used to show collapsible content panels.

```jsx
<Accordion 
  items={[
    { 
      id: 'item-1', 
      title: 'What is this design system?', 
      content: 'Content for section 1' 
    },
    { 
      id: 'item-2', 
      title: 'How to use these components?', 
      content: 'Content for section 2' 
    }
  ]} 
/>
```

Props:
- `items`: Array of accordion items
- `allowMultiple`: Whether multiple items can be open at once
- `className`: Additional CSS class names

#### Badge

The Badge component is used to highlight and categorize items or show counts.

```jsx
<Badge variant="primary">Primary</Badge>
<Badge variant="success" withDot>Active</Badge>
<Badge variant="error" pill>42</Badge>
```

Props:
- `variant`: The visual style of the badge
- `size`: The size of the badge
- `withDot`: Show a dot indicator before the content
- `pill`: Make badge pill shaped (more rounded)
- `outline`: Make badge outline style

### Navigation Components

#### Breadcrumbs

The Breadcrumbs component shows the current location within the app hierarchy.

```jsx
<Breadcrumbs 
  items={[
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Current Page', active: true }
  ]} 
/>
```

Props:
- `items`: Array of breadcrumb items
- `separator`: Custom separator between items
- `maxItems`: Maximum items to show before collapsing
- `onItemClick`: Function to handle item click

#### Tabs

The Tabs component is used to organize content into separate views.

```jsx
<Tabs
  tabs={[
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>
    }
  ]}
/>
```

Props:
- `tabs`: Array of tab items
- `defaultActiveTab`: ID of the tab that should be active by default
- `onChange`: Function to call when the active tab changes

### UI Components

#### Button

The Button component is used for user interactions.

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="outline" disabled>Disabled</Button>
```

Props:
- `variant`: The visual style of the button
- `size`: The size of the button
- `fullWidth`: Make the button full width
- `disabled`: Disable the button
- `loading`: Show a loading indicator
- `withRipple`: Add a ripple effect on click

#### ThemeToggle

The ThemeToggle component is used to switch between light and dark modes.

```jsx
<ThemeToggle />
```

Props:
- `className`: Additional CSS class names

## Theming

The design system supports both light and dark themes through TailwindCSS. The theme can be toggled using the `ThemeToggle` component.

All colors are defined as CSS variables in the `:root` and `.dark` selectors, making it easy to customize the entire system by changing these variables.

```css
:root {
  --primary-500: #1890ff;
  --background-primary: #ffffff;
  --text-primary: #111827;
  /* other variables */
}

.dark {
  --primary-500: #1890ff;
  --background-primary: #121212;
  --text-primary: #f4f4f5;
  /* other variables */
}
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Sufficient color contrast
- Focus management
- Screen reader friendly

## Best Practices

### Component Selection

- Use the appropriate component for the task
- Maintain consistent usage patterns across your application
- Consider the user's mental model when selecting components

### Design Principles

- Keep interfaces simple and intuitive
- Use clear and concise language
- Provide feedback for user actions
- Design for accessibility from the start
- Ensure responsive design for all screen sizes

---

Copyright © 2023 Design System. All rights reserved. 