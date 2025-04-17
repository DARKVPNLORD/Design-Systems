import React from 'react';
import Button from './components/Button';
import Accordion from './components/data-display/Accordion';
import Badge from './components/data-display/Badge';
import Breadcrumbs from './components/navigation/Breadcrumbs';
import Tabs from './components/navigation/Tabs';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  // Demo accordion content
  const accordionItems = [
    {
      id: 'item-1',
      title: 'What is this design system?',
      content: 'This is a design system built with React, TypeScript, TailwindCSS, and Storybook. It includes color tokens, data display components, and navigation components.',
    },
    {
      id: 'item-2',
      title: 'How to use these components?',
      content: 'Import the components from their respective folders and use them in your application. Check the Storybook documentation for more details.',
    },
  ];

  // Navigation demo data
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Navigation', href: '#' },
    { label: 'Breadcrumbs', active: true }
  ];

  // Opens Storybook in a new tab
  const openStorybook = () => {
    window.open('http://localhost:6006', '_blank');
  };
  
  // Opens GitHub repository in a new tab
  const openGitHub = () => {
    window.open('https://github.com/DARKVPNLORD/Design-Systems', '_blank');
  };

  // Tab content for the component showcase
  const tabItems = [
    {
      id: 'tab1',
      label: 'Colors',
      content: (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 p-6 bg-background-secondary rounded-2xl shadow-card">
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-primary-500 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Primary</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-secondary-500 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Secondary</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-tertiary-500 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Tertiary</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-success shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Success</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-info shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Info</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-warning shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Warning</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-error shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Error</span>
          </div>
          <div className="flex flex-col items-center group hover-lift">
            <div className="h-20 w-20 rounded-2xl bg-gray-700 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:bg-gray-600"></div>
            <span className="mt-3 text-sm font-medium text-text-secondary">Neutral</span>
          </div>
        </div>
      ),
    },
    // Other tabs - badges, accordions, breadcrumbs
    {
      id: 'tab2',
      label: 'Buttons',
      content: (
        <div className="space-y-8 p-6 bg-background-secondary rounded-2xl shadow-card">
          <div>
            <h3 className="text-base font-medium mb-3 text-text-primary">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="transform transition-all duration-300 hover:scale-105">Primary</Button>
              <Button variant="secondary" className="transform transition-all duration-300 hover:scale-105">Secondary</Button>
              <Button variant="tertiary" className="transform transition-all duration-300 hover:scale-105">Tertiary</Button>
              <Button variant="outline" className="transform transition-all duration-300 hover:scale-105">Outline</Button>
              <Button variant="ghost" className="transform transition-all duration-300 hover:scale-105">Ghost</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-3 text-text-primary">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm" className="transform transition-all duration-300 hover:scale-105">Small</Button>
              <Button variant="primary" size="md" className="transform transition-all duration-300 hover:scale-105">Medium</Button>
              <Button variant="primary" size="lg" className="transform transition-all duration-300 hover:scale-105">Large</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-3 text-text-primary">Button States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="transform transition-all duration-300 hover:scale-105">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" loading>Loading</Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab3',
      label: 'Badges',
      content: (
        <div className="space-y-6 p-6 bg-background-secondary rounded-2xl shadow-card">
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">Standard Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="tertiary">Tertiary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">Pill Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge pill variant="primary">Primary</Badge>
              <Badge pill variant="secondary">Secondary</Badge>
              <Badge pill variant="success">Success</Badge>
              <Badge pill variant="error">Error</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">Outline Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge outline variant="primary">Primary</Badge>
              <Badge outline variant="secondary">Secondary</Badge>
              <Badge outline variant="success">Success</Badge>
              <Badge outline variant="error">Error</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">With Dot Indicator</h3>
            <div className="flex flex-wrap gap-3">
              <Badge withDot variant="primary">Primary</Badge>
              <Badge withDot variant="success">Success</Badge>
              <Badge withDot pill variant="error">Error</Badge>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tab4',
      label: 'Accordion',
      content: (
        <div className="p-6 bg-background-secondary rounded-2xl shadow-card">
          <Accordion items={accordionItems} className="transform transition-all duration-300 hover:scale-[1.01]" />
        </div>
      ),
    },
    {
      id: 'tab5',
      label: 'Breadcrumbs',
      content: (
        <div className="space-y-8 p-6 bg-background-secondary rounded-2xl shadow-card">
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">Standard Breadcrumbs</h3>
            <Breadcrumbs items={breadcrumbItems} className="transform transition-all duration-300" />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">With Custom Separator</h3>
            <Breadcrumbs 
              items={breadcrumbItems} 
              separator=">"
              className="transform transition-all duration-300" 
            />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-text-primary">With Collapsed Items</h3>
            <Breadcrumbs 
              items={[
                { label: 'Home', href: '#' },
                { label: 'Products', href: '#' },
                { label: 'Categories', href: '#' },
                { label: 'Electronics', href: '#' },
                { label: 'Computers', href: '#' },
                { label: 'Laptops', active: true }
              ]} 
              maxItems={4}
              className="transform transition-all duration-300" 
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary transition-colors duration-300">
      <div className="animated-gradient h-2 w-full"></div>
      <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>
        
        <header className="mb-12 text-center animate-slide-in-top">
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 text-shadow">
            Design System
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive collection of reusable components for enterprise B2B applications
          </p>
          <div className="mt-6 flex justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="mr-4"
              onClick={openGitHub}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={openStorybook}
            >
              Storybook
            </Button>
          </div>
        </header>
        
        <div className="space-y-16">
          <section className="bg-background-primary rounded-3xl shadow-soft p-6 transform transition-all duration-300 hover:shadow-floating animate-slide-in-right dark:shadow-dark-card">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary border-b pb-3 border-gray-100 dark:border-gray-800">
              Component Showcase
            </h2>
            <Tabs tabs={tabItems} className="transition-all duration-300" />
          </section>
        </div>
        
        <footer className="mt-16 py-6 text-center text-text-tertiary text-sm">
          <p>© 2025 Design System. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={openGitHub}
            >
              GitHub
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={openStorybook}
            >
              Storybook
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}