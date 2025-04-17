/**
 * Script to prepare the deployment by copying Storybook build to the dist folder
 */
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Define paths
const storybookBuildDir = join(rootDir, 'storybook-static');
const targetDir = join(rootDir, 'dist', 'storybook');
const mainIndexPath = join(rootDir, 'dist', 'index.html');

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy storybook files to the dist/storybook directory
copyDirRecursively(storybookBuildDir, targetDir);

// Modify the main index.html to add a link to Storybook
if (fs.existsSync(mainIndexPath)) {
  let mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8');
  
  // Check if we've already added the Storybook link
  if (!mainIndexContent.includes('View Storybook')) {
    // Insert the Storybook link before the closing body tag
    mainIndexContent = mainIndexContent.replace(
      '</body>',
      `  <div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
    <a href="./storybook/index.html" 
       style="display: inline-block; padding: 12px 20px; background-color: #FF4785; color: white; 
              text-decoration: none; border-radius: 4px; font-weight: bold; font-family: sans-serif;
              box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
      View Storybook
    </a>
  </div>
</body>`
    );
    
    fs.writeFileSync(mainIndexPath, mainIndexContent);
    console.log('✅ Added Storybook link to main index.html');
  }
}

console.log('✅ Storybook files copied to dist/storybook');

/**
 * Recursively copy a directory
 */
function copyDirRecursively(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirRecursively(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} 