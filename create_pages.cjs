const fs = require('fs');

const template = fs.readFileSync('src/pages/MechanicalEngineeringPage.jsx', 'utf8');

const pagesToCreate = [
  { file: 'ElectricalEngineeringDiplomaPage.jsx', key: 'electrical-engineering-diploma', name: 'ElectricalEngineeringDiplomaPage' },
  { file: 'EnvironmentalEngineeringPage.jsx', key: 'environmental-engineering', name: 'EnvironmentalEngineeringPage' },
  { file: 'EnergyEnvironmentalPage.jsx', key: 'energy-environmental-engineering', name: 'EnergyEnvironmentalPage' },
  { file: 'ElectricalVehicleTechPage.jsx', key: 'electrical-vehicle-technology', name: 'ElectricalVehicleTechPage' },
  { file: 'StructuralEngineeringPage.jsx', key: 'structural-engineering', name: 'StructuralEngineeringPage' },
  { file: 'IndustrialSafetyPage.jsx', key: 'industrial-safety-engineering', name: 'IndustrialSafetyPage' }
];

pagesToCreate.forEach(page => {
  let content = template;
  
  // Replace the component name
  content = content.replace(/const MechanicalEngineeringPage =/g, `const ${page.name} =`);
  content = content.replace(/export default MechanicalEngineeringPage;/g, `export default ${page.name};`);
  
  // Replace the department data key
  content = content.replace(/const rawData = getDepartment\("mechanical-engineering"\);/g, `const rawData = getDepartment("${page.key}");`);
  
  // Write the new file
  fs.writeFileSync('src/pages/' + page.file, content);
  console.log('Created ' + page.file);
});
