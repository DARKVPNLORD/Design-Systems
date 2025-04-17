/**
 * Script to prepare the deployment by copying Storybook build to the dist folder
 */
import fs from 'fs';
import path, { join, dirname } from 'path';
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

// Copy .nojekyll file to dist
const nojekyllPath = join(rootDir, '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
  fs.copyFileSync(nojekyllPath, join(rootDir, 'dist', '.nojekyll'));
  console.log('✅ Copied .nojekyll to dist folder');
} else {
  // Create .nojekyll file in dist if it doesn't exist
  fs.writeFileSync(join(rootDir, 'dist', '.nojekyll'), '');
  console.log('✅ Created .nojekyll in dist folder');
}

// Copy storybook files to the dist/storybook directory
copyDirRecursively(storybookBuildDir, targetDir);

// Fix path issues in Storybook HTML files
fixStorybookPaths(targetDir);

// Special fix for iframe.html issue - copy it to the assets directory where it's being looked for
const iframeHtmlPath = join(targetDir, 'iframe.html');
const assetsDir = join(targetDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

if (fs.existsSync(iframeHtmlPath)) {
  fs.copyFileSync(iframeHtmlPath, join(assetsDir, 'iframe.html'));
  console.log('✅ Copied iframe.html to assets directory as a fallback');
}

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
 * Fix paths in Storybook HTML files
 */
function fixStorybookPaths(dir) {
  const htmlFiles = findFiles(dir, '.html');
  const jsFiles = findFiles(dir, '.js');
  
  // Fix HTML files
  for (const htmlFile of htmlFiles) {
    let content = fs.readFileSync(htmlFile, 'utf8');
    
    // Replace absolute paths with relative paths
    content = content.replace(/\/assets\//g, './assets/');
    
    // Fix import map paths
    content = content.replace(/"\/[^"]*\/assets\//g, '"./assets/');
    
    // Fix module paths
    content = content.replace(/from "\/[^"]*\/assets\//g, 'from "./assets/');
    
    // Fix fetch paths
    content = content.replace(/fetch\("\/[^"]*\/assets\//g, 'fetch("./assets/');
    
    // Fix iframe references
    content = content.replace(/"iframe\.html"/g, '"./iframe.html"');
    content = content.replace(/"\.\/iframe\.html"/g, '"./iframe.html"');

    // Additional iframe.html fixes for different path patterns
    content = content.replace(/src="[^"]*iframe\.html"/g, 'src="./iframe.html"');
    
    fs.writeFileSync(htmlFile, content);
  }
  
  // Fix JavaScript files
  for (const jsFile of jsFiles) {
    let content = fs.readFileSync(jsFile, 'utf8');
    
    // Fix import paths in JS files
    content = content.replace(/from "\/[^"]*\/assets\//g, 'from "./assets/');
    content = content.replace(/import\("\/[^"]*\/assets\//g, 'import("./assets/');
    
    // Fix fetch paths
    content = content.replace(/fetch\("\/[^"]*\/assets\//g, 'fetch("./assets/');
    
    // Fix iframe references
    content = content.replace(/"iframe\.html"/g, '"./iframe.html"');
    content = content.replace(/"\.\/iframe\.html"/g, '"./iframe.html"');
    content = content.replace(/\/iframe\.html/g, './iframe.html');
    
    fs.writeFileSync(jsFile, content);
  }
  
  console.log('✅ Fixed paths in Storybook files');
}

/**
 * Find files with a specific extension
 */
function findFiles(dir, extension) {
  const result = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      result.push(...findFiles(filePath, extension));
    } else if (file.endsWith(extension)) {
      result.push(filePath);
    }
  }
  
  return result;
}

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