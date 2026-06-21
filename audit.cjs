const fs = require('fs');
const c = fs.readFileSync('src/data/departmentData.js', 'utf8');

const keys = [
  'mechanical-engineering',
  'electricals-and-electronics-engineering',
  'civil-engineering',
  'biotechnology-engineering',
  'electronics-and-telecommunication-engineering',
  'electronics-vlsi-design'
];

keys.forEach(k => {
  console.log(k + ':', c.includes('"' + k + '"'));
});

// Check pages
const pages = fs.readdirSync('src/pages');
console.log('\nPage files:');
pages.forEach(p => console.log(' ', p));

// Check App.jsx routes
const app = fs.readFileSync('src/App.jsx', 'utf8');
keys.forEach(k => {
  const hasRoute = app.includes('/' + k);
  console.log('Route ' + k + ':', hasRoute);
});
