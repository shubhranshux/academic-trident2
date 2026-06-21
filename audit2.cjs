const fs = require('fs');
const c = fs.readFileSync('src/data/departmentData.js', 'utf8');

// Find what sections mechanical-engineering has
const mechIdx = c.indexOf('"mechanical-engineering"');
if (mechIdx === -1) {
  console.log('No mechanical-engineering found');
} else {
  // Extract roughly 200 chars to see structure
  const snippet = c.substring(mechIdx, mechIdx + 500);
  console.log('MECHANICAL snippet:');
  console.log(snippet.substring(0, 500));
  console.log('\n---');

  // Check for homeContent
  const mechEnd = c.indexOf('\n  "', mechIdx + 10);
  const mechBlock = mechEnd > 0 ? c.substring(mechIdx, mechEnd) : c.substring(mechIdx, mechIdx + 5000);
  console.log('Has homeContent:', mechBlock.includes('homeContent'));
  console.log('Has overview:', mechBlock.includes('overview'));
  console.log('Has syllabus:', mechBlock.includes('syllabus'));
  console.log('Has faculty:', mechBlock.includes('faculty'));
  console.log('Has laboratories:', mechBlock.includes('laboratories'));
}

// Check if line 4921 has duplicate syllabus key issue
const lines = c.split('\n');
console.log('\nLine 4920:', lines[4919]);
console.log('Line 4921:', lines[4920]);
console.log('Line 4922:', lines[4921]);

// Count total lines
console.log('\nTotal lines:', lines.length);

// Check for "electricals" data
console.log('\nSearching for electricals...');
const eIdx = c.indexOf('electricals-and-electronics');
console.log('Found at index:', eIdx);
if (eIdx > 0) {
  console.log('Context:', c.substring(Math.max(0, eIdx-20), eIdx+80));
}
