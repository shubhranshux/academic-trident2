const fs = require('fs');

const files = [
  'src/pages/MechanicalEngineeringPage.jsx',
  'src/pages/ElectricalEngineeringPage.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let idx1 = content.indexOf("case 'syllabus':");
  let idx2 = content.indexOf("case 'syllabus':", idx1 + 1);
  
  if (idx1 !== -1 && idx2 !== -1) {
    content = content.substring(0, idx1) + content.substring(idx2);
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
