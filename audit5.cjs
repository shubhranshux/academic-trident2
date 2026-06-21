const fs = require('fs');
const c = fs.readFileSync('src/data/departmentData.js', 'utf8');
const lines = c.split('\n');

// Find lines that look like top-level department keys (inside the const departmentData = {})
// They start with optional whitespace, then a quoted string, then : {
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trimEnd();
  // Match pattern like:   "some-slug": {
  if (/^\s{2}"[a-z][a-z0-9-]+":\s*\{/.test(line)) {
    console.log('Line ' + (i+1) + ': ' + line.trim());
  }
}
