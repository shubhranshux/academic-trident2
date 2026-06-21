const fs = require('fs');
const c = fs.readFileSync('src/data/departmentData.js', 'utf8');

// Use regex to find all top-level department keys
const regex = /^\s+"([a-z-]+)":\s*\{/gm;
let match;
const departments = [];
while ((match = regex.exec(c)) !== null) {
  // Only count top-level keys (indented by exactly 2 spaces)
  if (match[0].startsWith('  "') && !match[0].startsWith('    "')) {
    departments.push({ key: match[1], index: match.index });
  }
}

console.log('=== DEPARTMENT DATA KEYS ===');
departments.forEach(d => {
  const line = c.substring(0, d.index).split('\n').length;
  console.log('  Line ' + line + ': ' + d.key);
});

// Check which ElectronicsVLSI duplicate syllabus is about
// The line 4921 is in electronics-and-telecommunication-engineering
// Find which department block line 4921 is in
const lines = c.split('\n');
let currentDept = '';
for (let i = 0; i < Math.min(4925, lines.length); i++) {
  const m = lines[i].match(/^\s{2}"([a-z][\w-]+)":\s*\{/);
  if (m) currentDept = m[1];
}
console.log('\nLine 4921 is in department:', currentDept);

// Check what exists in electronics-vlsi-design
const vlsiIdx = c.indexOf('"electronics-vlsi-design":');
if (vlsiIdx > 0) {
  // Find end of vlsi block
  let depth = 0;
  let started = false;
  let endIdx = vlsiIdx;
  for (let i = vlsiIdx; i < c.length; i++) {
    if (c[i] === '{') { depth++; started = true; }
    if (c[i] === '}') { depth--; }
    if (started && depth === 0) { endIdx = i; break; }
  }
  const vlsiBlock = c.substring(vlsiIdx, endIdx + 1);
  console.log('\nVLSI block has:');
  console.log('  homeContent:', vlsiBlock.includes('homeContent'));
  console.log('  overview:', vlsiBlock.includes('overview'));
  console.log('  syllabus:', vlsiBlock.includes('syllabus'));
  console.log('  faculty:', vlsiBlock.includes('faculty'));
  console.log('  laboratories:', vlsiBlock.includes('laboratories'));
  
  // Count the occurrences of "syllabus" key in the vlsi block
  const syllabusMatches = vlsiBlock.match(/syllabus/g);
  console.log('  syllabus occurrences:', syllabusMatches ? syllabusMatches.length : 0);
}
