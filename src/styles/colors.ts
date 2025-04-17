// Define color tokens for the design system

// Primary Colors
export const primaryColors = {
  primary50: '#e6f7ff',
  primary100: '#bae7ff',
  primary200: '#91d5ff',
  primary300: '#69c0ff',
  primary400: '#40a9ff',
  primary500: '#1890ff', // Main primary color
  primary600: '#096dd9',
  primary700: '#0050b3',
  primary800: '#003a8c',
  primary900: '#002766',
};

// Secondary Colors
export const secondaryColors = {
  secondary50: '#f6ffed',
  secondary100: '#d9f7be',
  secondary200: '#b7eb8f',
  secondary300: '#95de64',
  secondary400: '#73d13d',
  secondary500: '#52c41a', // Main secondary color
  secondary600: '#389e0d',
  secondary700: '#237804',
  secondary800: '#135200',
  secondary900: '#092b00',
};

// Tertiary Colors
export const tertiaryColors = {
  tertiary50: '#fff2e8',
  tertiary100: '#ffd8bf',
  tertiary200: '#ffbb96',
  tertiary300: '#ff9c6e',
  tertiary400: '#ff7a45',
  tertiary500: '#fa541c', // Main tertiary color
  tertiary600: '#d4380d',
  tertiary700: '#ad2102',
  tertiary800: '#871400',
  tertiary900: '#610b00',
};

// Neutral Colors (grays, whites, backgrounds, borders)
export const neutralColors = {
  white: '#ffffff',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  black: '#000000',
};

// Semantic Colors (success, info, warning, error)
export const semanticColors = {
  success: '#52c41a',
  successLight: '#d9f7be',
  successDark: '#389e0d',
  
  info: '#1890ff',
  infoLight: '#bae7ff',
  infoDark: '#096dd9',
  
  warning: '#faad14',
  warningLight: '#fff1b8',
  warningDark: '#d48806',
  
  error: '#f5222d',
  errorLight: '#ffa39e',
  errorDark: '#cf1322',
};

// Combined color tokens
export const colors = {
  ...primaryColors,
  ...secondaryColors,
  ...tertiaryColors,
  ...neutralColors,
  ...semanticColors,
};

export default colors; 