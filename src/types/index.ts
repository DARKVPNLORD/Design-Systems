// Common Types for the Design System

/**
 * Base size variants used throughout the design system
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Color variants for components
 */
export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'success' 
  | 'info' 
  | 'warning' 
  | 'error' 
  | 'neutral';

/**
 * Common status states for components
 */
export type StatusState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Common interactive states for components
 */
export type InteractiveState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';

/**
 * Common accessibility props that can be applied to components
 */
export interface AccessibilityProps {
  /**
   * Element ID, useful for associating with labels or other elements
   */
  id?: string;
  /**
   * ARIA label for screen readers if no visible label is present
   */
  'aria-label'?: string;
  /**
   * ID of the element that labels this element
   */
  'aria-labelledby'?: string;
  /**
   * ID of the element that describes this element
   */
  'aria-describedby'?: string;
  /**
   * Indicates whether the element is disabled
   */
  'aria-disabled'?: boolean;
  /**
   * Indicates the current "selected" state of components
   */
  'aria-selected'?: boolean;
  /**
   * Indicates whether an element is expanded or collapsed
   */
  'aria-expanded'?: boolean;
  /**
   * Indicates whether an element, or another grouping element it controls, is currently expanded or collapsed
   */
  'aria-controls'?: string;
  /**
   * Indicates the availability and type of interactive popup element that can be triggered by the element
   */
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
} 