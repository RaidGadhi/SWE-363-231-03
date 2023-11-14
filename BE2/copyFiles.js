const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyFilesWithExtension(sourceDir, targetDir, extensions) {
  try {
    // Read the contents of the source directory
    const files = await readdir(sourceDir);

    // Filter files with specific extensions
    const filteredFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    });

    // Create the target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir);
    }

    // Copy filtered files to the target directory
    await Promise.all(filteredFiles.map(async file => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);
      await copyFile(sourcePath, targetPath);
      console.log(`${file} copied to ${targetDir}`);
    }));

    console.log('Files copied successfully!');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Check if command-line arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node copyFiles.js <source_directory> <target_directory>');
  process.exit(1);
}

// Get command-line arguments
const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const allowedExtensions = ['.txt', '.jpg']; // Add or remove extensions as needed

// Copy files with specified extensions from source to target directory
copyFilesWithExtension(sourceDir, targetDir, allowedExtensions);
