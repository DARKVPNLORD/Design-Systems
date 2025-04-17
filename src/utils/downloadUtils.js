// Utility functions for external resources and links

// Opens the Storybook UI in a new browser tab
export const openStorybook = () => {
  try {
    window.open('http://localhost:6006', '_blank');
    return true;
  } catch (error) {
    console.error('Error opening Storybook:', error);
    return false;
  }
};

export default {
  openStorybook
}; 