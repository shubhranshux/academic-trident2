const fs = require('fs');
const content = fs.readFileSync('src/data/departmentData.js', 'utf8');
const lines = content.split('\n');
const keys = lines.filter(l => l.match(/^\s*\"[a-z-]+\":\s*\{/)).map(l => l.trim());
console.log(keys);
