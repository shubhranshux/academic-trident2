const fs = require('fs');
const c = fs.readFileSync('src/data/departmentData.js', 'utf8');

// Find mechanical-engineering and see what it actually has
const mechKey = '"mechanical-engineering"';
const mechIdx = c.indexOf(mechKey);
console.log('=== MECHANICAL-ENGINEERING ===');
console.log('Found at char index:', mechIdx);

if (mechIdx > 0) {
  // Find the actual data start (the opening brace after the key)
  let searchStart = mechIdx;
  // Look backwards to find if this is in the comment area or actual data
  const before = c.substring(Math.max(0, mechIdx - 200), mechIdx);
  console.log('Context before:', before.substring(before.length - 100));
  
  // Find actual object: look for "mechanical-engineering": {
  const mechDataIdx = c.indexOf('"mechanical-engineering": {');
  if (mechDataIdx > 0) {
    console.log('\nFound data object at:', mechDataIdx);
    // Print first 300 chars
    console.log(c.substring(mechDataIdx, mechDataIdx + 500));
  } else {
    const mechDataIdx2 = c.indexOf('"mechanical-engineering":');
    console.log('\nFound key at:', mechDataIdx2);
    if (mechDataIdx2 > 0) {
      console.log(c.substring(mechDataIdx2, mechDataIdx2 + 500));
    }
  }
}

// Check what the duplicate syllabus is about
console.log('\n=== DUPLICATE SYLLABUS around line 4921 ===');
const lines = c.split('\n');
for (let i = 4910; i < 4930; i++) {
  console.log((i+1) + ': ' + lines[i]);
}

// Find the end of departmentData
const lastBrace = c.lastIndexOf('};');
console.log('\n=== END OF FILE ===');
console.log('Last }; at char:', lastBrace);
console.log('Lines around end:');
for (let i = lines.length - 10; i < lines.length; i++) {
  if (i >= 0) console.log((i+1) + ': ' + lines[i]);
}
