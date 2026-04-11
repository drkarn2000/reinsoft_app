const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if(!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        checkDir(fullPath);
      }
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const imgRegex = /<(?:Image|img)[^>]*>/g;
      let match;
      while ((match = imgRegex.exec(content)) !== null) {
        const tag = match[0];
        if (!/alt\s*=\s*['"{]/.test(tag) || /alt\s*=\s*(?:"|''|{\s*"(?:| )\s*})/.test(tag) || /alt\s*=\s*['"]\s*['"]/.test(tag)) {
          console.log(fullPath);
          console.log(tag);
          console.log('---');
        }
      }
    }
  }
}
checkDir('./app');
checkDir('./components');
checkDir('./sections');
