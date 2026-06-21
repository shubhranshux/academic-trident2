const fs = require('fs');

const path = 'src/data/departmentData.js';
let content = fs.readFileSync(path, 'utf8');

// Find the electronics block
const electronicsKey = '"electronics-and-telecommunication-engineering": {';
const startIdx = content.indexOf(electronicsKey);

if (startIdx === -1) {
    console.error('Could not find electronics data');
    process.exit(1);
}

// Simple brace matching to find the end of the electronics block
let openBraces = 0;
let endIdx = -1;
let foundFirstBrace = false;

for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '{') {
        openBraces++;
        foundFirstBrace = true;
    } else if (content[i] === '}') {
        openBraces--;
    }
    
    if (foundFirstBrace && openBraces === 0) {
        endIdx = i + 1;
        break;
    }
}

if (endIdx === -1) {
    console.error('Could not find end of electronics data');
    process.exit(1);
}

const electronicsDataStr = content.substring(startIdx, endIdx);

// Create mechanical data
let mechDataStr = electronicsDataStr
    .replace(/"electronics-and-telecommunication-engineering": \{/, '"mechanical-engineering": {')
    .replace(/Electronics & Telecommunication Engineering/g, 'Mechanical Engineering')
    .replace(/Electronics and Telecommunication Engineering/g, 'Mechanical Engineering')
    .replace(/Electronics & Telecommunication/g, 'Mechanical Engineering')
    .replace(/Electronics and Telecommunication/g, 'Mechanical Engineering')
    .replace(/electronics-and-telecommunication-engineering/g, 'mechanical-engineering')
    .replace(/ELECTRONICS &\\nTELECOMMUNICATION/g, 'MECHANICAL\\nENGINEERING');

// Create electrical data
let elecDataStr = electronicsDataStr
    .replace(/"electronics-and-telecommunication-engineering": \{/, '"electricals-and-electronics-engineering": {')
    .replace(/Electronics & Telecommunication Engineering/g, 'Electrical & Electronics Engineering')
    .replace(/Electronics and Telecommunication Engineering/g, 'Electrical & Electronics Engineering')
    .replace(/Electronics & Telecommunication/g, 'Electrical & Electronics')
    .replace(/Electronics and Telecommunication/g, 'Electrical & Electronics')
    .replace(/electronics-and-telecommunication-engineering/g, 'electricals-and-electronics-engineering')
    .replace(/ELECTRONICS &\\nTELECOMMUNICATION/g, 'ELECTRICAL &\\nELECTRONICS ENGINEERING');

// Insert after electronics block
const insertStr = ',\n' + mechDataStr + ',\n' + elecDataStr;
const newContent = content.substring(0, endIdx) + insertStr + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Successfully added mechanical and electrical data');
