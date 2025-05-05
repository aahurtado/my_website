const fs = require('fs');
const path = require('path');
const Terser = require('terser');
const mkdirp = require('mkdirp');

// Directories
const srcDir = './src/js';
const outDir = './dist/js';

// Create output directory
mkdirp.sync(outDir);

// Read .js files from src/js
fs.readdirSync(srcDir)
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const srcPath = path.join(srcDir, file);
    const outPath = path.join(outDir, file);
    // Minify with Terser
    Terser.minify(fs.readFileSync(srcPath, 'utf8'), {
      compress: true,
      mangle: true
    })
      .then(result => {
        fs.writeFileSync(outPath, result.code);
        console.log(`Minified: ${file}`);
      })
      .catch(err => {
        console.error(`Failed to minify ${file}:`, err);
        process.exit(1);
      });
  });