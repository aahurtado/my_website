const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const copyDir = (src, dest) => {
  mkdirp.sync(dest);
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

copyDir('./src/images', './dist/images');
copyDir('./src/fonts', './dist/fonts');