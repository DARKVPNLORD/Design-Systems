# B2B Design System

Hey there! 👋 Welcome to our Design System – a collection of ready-to-use React components built for modern B2B applications. We've created this system to help you build consistent, accessible, and beautiful user interfaces without reinventing the wheel.

## What's Included?

- **Dark & Light Modes** - Switch between themes with zero effort
- **Accessible Components** - Built with keyboard navigation and screen readers in mind
- **Responsive Design** - Works on all devices, from phones to desktops
- **Modern Look & Feel** - Clean, professional styling for enterprise applications
- **Tailwind Integration** - Leverages the power of TailwindCSS for styling

## Available Components

### UI Elements
- **Button** - Multiple variants, sizes, and states with icon support
- **ThemeToggle** - An easy way to switch between dark and light modes

### Data Display
- **Accordion** - Collapsible content panels for organizing information
- **Badge** - Highlight information, statuses, or counts

### Navigation
- **Tabs** - Organize content into manageable sections
- **Breadcrumbs** - Show users their current location and navigation path

## Getting Started

### Quick Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/DARKVPNLORD/Design-Systems.git
   cd Design-Systems
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Explore the components in Storybook**
   ```bash
   npm run storybook
   ```

## Using the Components

### Installation

You can install the design system in your project using npm or yarn:

```bash
# Using npm
npm install git+https://github.com/DARKVPNLORD/Design-Systems.git

# Using yarn
yarn add git+https://github.com/DARKVPNLORD/Design-Systems.git
```

### Basic Usage

Import components directly from the package:

```jsx
import { Button, Badge, Accordion } from 'design-systems';

function MyApp() {
  return (
    <>
      <Button variant="primary">Save Changes</Button>
      <Badge variant="success">Active</Badge>
    </>
  );
}
```

### Button Component

The Button component supports multiple variants, sizes, and states:

```jsx
import { Button } from 'design-systems';

// Button variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="tertiary">Tertiary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>

// Button sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Button states
<Button disabled>Disabled Button</Button>
<Button loading>Loading Button</Button>

// Full width button
<Button fullWidth>Full Width Button</Button>

// With icons
<Button 
  leftIcon={<svg>...</svg>}
  rightIcon={<svg>...</svg>}
>
  Button with Icons
</Button>
```

### Badge Component

Badges can be customized with various options:

```jsx
import { Badge } from 'design-systems';

// Badge variants
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>

// Pill shape
<Badge pill>Rounded Badge</Badge>

// Outline style
<Badge outline>Outline Badge</Badge>

// With dot indicator
<Badge withDot>Status Badge</Badge>

// Badge sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Combined properties
<Badge variant="warning" pill outline>Custom Badge</Badge>
```

### Accordion Component

Create expandable content sections:

```jsx
import { Accordion } from 'design-systems';

const items = [
  {
    id: 'section1',
    title: 'Section 1',
    content: 'This is the content for section 1'
  },
  {
    id: 'section2',
    title: 'Section 2',
    content: 'This is the content for section 2'
  }
];

// Basic accordion
<Accordion items={items} />

// With custom initial state (section2 open by default)
<Accordion items={items} defaultOpenItems={['section2']} />

// Allow multiple sections to be open simultaneously
<Accordion items={items} allowMultiple />
```

### Tabs Component

Organize content into tab sections:

```jsx
import { Tabs } from 'design-systems';

const tabItems = [
  {
    id: 'tab1',
    label: 'First Tab',
    content: <div>Content for first tab</div>
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    content: <div>Content for second tab</div>
  }
];

<Tabs tabs={tabItems} />

// With default active tab
<Tabs tabs={tabItems} defaultActiveTab="tab2" />
```

### Breadcrumbs Component

Display navigation paths:

```jsx
import { Breadcrumbs } from 'design-systems';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Item', active: true }
];

// Basic breadcrumbs
<Breadcrumbs items={items} />

// Custom separator
<Breadcrumbs items={items} separator=">" />

// Limit visible items (will collapse the middle ones)
<Breadcrumbs items={items} maxItems={3} />
```

### Combining Components

Build complex interfaces by combining components:

```jsx
import { Button, Badge, Tabs, Accordion } from 'design-systems';

function ProductPage() {
  const tabItems = [
    {
      id: 'details',
      label: 'Product Details',
      content: (
        <div>
          <h2>Product Name <Badge variant="success">In Stock</Badge></h2>
          <p>Product description goes here...</p>
          <Button variant="primary">Add to Cart</Button>
        </div>
      )
    },
    {
      id: 'specs',
      label: 'Specifications',
      content: (
        <Accordion items={[
          { id: 'dimensions', title: 'Dimensions', content: '10" x 5" x 2"' },
          { id: 'weight', title: 'Weight', content: '1.5 lbs' }
        ]} />
      )
    }
  ];
  
  return <Tabs tabs={tabItems} />;
}
```

## Theming

Our design system uses CSS variables for all colors and design tokens, making it super easy to customize. Just modify the variables in your CSS or use the built-in dark mode.

### Default Theme Setup

Add the following to your main CSS file to enable theme support:

```css
/* Import the base styles */
@import 'design-systems/dist/index.css';

/* Optional: Override theme variables */
:root {
  --primary-500: #1890ff; /* Change primary color */
  --success: #52c41a; /* Change success color */
}
```

### Dark Mode Toggle

To toggle dark mode programmatically:

```jsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Check current mode
const isDarkMode = document.documentElement.classList.contains('dark');

// Set specific mode
document.documentElement.classList.remove('dark'); // Light mode
document.documentElement.classList.add('dark');    // Dark mode
```

Or use our `ThemeToggle` component, which handles this for you:

```jsx
import { ThemeToggle } from 'design-systems';

<ThemeToggle />
```

## Project Structure

```
design-systems/
├── src/
│   ├── components/            # All reusable components
│   │   ├── Button.tsx         # Basic UI components
│   │   ├── data-display/      # Data presentation components  
│   │   └── navigation/        # Navigation-related components
│   ├── App.jsx                # Demo app showing components in action
│   └── index.css              # Global styles and theme variables
├── .storybook/               # Storybook configuration
└── ... (config files)
```

## Want to Contribute?

We'd love your help making this design system even better! Here's how:

1. Fork the repo
2. Create your feature branch: `git checkout -b cool-new-feature`
3. Make your changes and commit them: `git commit -m 'Add some awesomeness'`
4. Push to your branch: `git push origin cool-new-feature`
5. Open a pull request

## License

This project is available under the MIT License. Feel free to use it in your own projects!

---

Built with ❤️ using React, TypeScript, TailwindCSS, and Storybook 
