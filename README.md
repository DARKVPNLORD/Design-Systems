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
   git clone https://github.com/yourusername/my-project.git
   cd my-project
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

### Using the Components

Here's a quick example of how to use our components in your app:

```jsx
import { Button, Badge, Accordion } from 'my-project';

function MyApp() {
  return (
    <>
      <Button variant="primary">Save Changes</Button>
      
      <Badge variant="success">Active</Badge>
      
      <Accordion items={[
        { 
          id: '1', 
          title: 'How do I use this?', 
          content: 'Just import the components you need!' 
        }
      ]} />
    </>
  );
}
```

## Theming

Our design system uses CSS variables for all colors and design tokens, making it super easy to customize. Just modify the variables in your CSS or use the built-in dark mode.

To toggle dark mode programmatically:
```jsx
document.documentElement.classList.toggle('dark');
```

Or use our `ThemeToggle` component, which handles this for you!

## Project Structure

```
my-project/
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
