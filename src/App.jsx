import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolOfComputingPage from './pages/SchoolOfComputingPage';
import SchoolOfComputingSubPage from './pages/SchoolOfComputingSubPage';

import SchoolOfEngineeringPage from './pages/SchoolOfEngineeringPage';
import SchoolOfEngineeringSubPage from './pages/SchoolOfEngineeringSubPage';
import BiotechnologyPage from './pages/BiotechnologyPage';
import ElectronicsPage from './pages/ElectronicsPage';
import ElectronicsVLSIPage from './pages/ElectronicsVLSIPage';
import MechanicalEngineeringPage from './pages/MechanicalEngineeringPage';
import ElectricalEngineeringPage from './pages/ElectricalEngineeringPage';
import CivilEngineeringPage from './pages/CivilEngineeringPage';
import ElectricalEngineeringDiplomaPage from './pages/ElectricalEngineeringDiplomaPage';
import EnvironmentalEngineeringPage from './pages/EnvironmentalEngineeringPage';
import EnergyEnvironmentalPage from './pages/EnergyEnvironmentalPage';
import ElectricalVehicleTechPage from './pages/ElectricalVehicleTechPage';
import StructuralEngineeringPage from './pages/StructuralEngineeringPage';
import IndustrialSafetyPage from './pages/IndustrialSafetyPage';




function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-bg-soft text-text-dark selection:bg-primary/20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Engineering Routes */}
            <Route path="/civil-engineering" element={<CivilEngineeringPage isHome={true} />} />
            <Route path="/civil-engineering/:subpage" element={<CivilEngineeringPage isHome={false} />} />
            <Route path="/civil-engineering/:subpage/:detail" element={<CivilEngineeringPage isHome={false} />} />


            <Route path="/biotechnology-engineering" element={<BiotechnologyPage isHome={true} />} />
            <Route path="/biotechnology-engineering/:subpage" element={<BiotechnologyPage isHome={false} />} />
            <Route path="/biotechnology-engineering/:subpage/:detail" element={<BiotechnologyPage isHome={false} />} />

            <Route path="/electronics-and-telecommunication-engineering" element={<ElectronicsPage isHome={true} />} />
            <Route path="/electronics-and-telecommunication-engineering/:subpage" element={<ElectronicsPage isHome={false} />} />
            <Route path="/electronics-and-telecommunication-engineering/:subpage/:detail" element={<ElectronicsPage isHome={false} />} />

            <Route path="/electronics-vlsi-design" element={<ElectronicsVLSIPage isHome={true} />} />
            <Route path="/electronics-vlsi-design/:subpage" element={<ElectronicsVLSIPage isHome={false} />} />
            <Route path="/electronics-vlsi-design/:subpage/:detail" element={<ElectronicsVLSIPage isHome={false} />} />

            <Route path="/mechanical-engineering" element={<MechanicalEngineeringPage isHome={true} />} />
            <Route path="/mechanical-engineering/:subpage" element={<MechanicalEngineeringPage isHome={false} />} />
            <Route path="/mechanical-engineering/:subpage/:detail" element={<MechanicalEngineeringPage isHome={false} />} />

            <Route path="/electricals-and-electronics-engineering" element={<ElectricalEngineeringPage isHome={true} />} />
            <Route path="/electricals-and-electronics-engineering/:subpage" element={<ElectricalEngineeringPage isHome={false} />} />
            <Route path="/electricals-and-electronics-engineering/:subpage/:detail" element={<ElectricalEngineeringPage isHome={false} />} />

            <Route path="/electrical-engineering-diploma" element={<ElectricalEngineeringDiplomaPage isHome={true} />} />
            <Route path="/electrical-engineering-diploma/:subpage" element={<ElectricalEngineeringDiplomaPage isHome={false} />} />
            <Route path="/electrical-engineering-diploma/:subpage/:detail" element={<ElectricalEngineeringDiplomaPage isHome={false} />} />

            <Route path="/environmental-engineering" element={<EnvironmentalEngineeringPage isHome={true} />} />
            <Route path="/environmental-engineering/:subpage" element={<EnvironmentalEngineeringPage isHome={false} />} />
            <Route path="/environmental-engineering/:subpage/:detail" element={<EnvironmentalEngineeringPage isHome={false} />} />

            <Route path="/energy-environmental-engineering" element={<EnergyEnvironmentalPage isHome={true} />} />
            <Route path="/energy-environmental-engineering/:subpage" element={<EnergyEnvironmentalPage isHome={false} />} />
            <Route path="/energy-environmental-engineering/:subpage/:detail" element={<EnergyEnvironmentalPage isHome={false} />} />

            <Route path="/electrical-vehicle-technology" element={<ElectricalVehicleTechPage isHome={true} />} />
            <Route path="/electrical-vehicle-technology/:subpage" element={<ElectricalVehicleTechPage isHome={false} />} />
            <Route path="/electrical-vehicle-technology/:subpage/:detail" element={<ElectricalVehicleTechPage isHome={false} />} />

            <Route path="/structural-engineering" element={<StructuralEngineeringPage isHome={true} />} />
            <Route path="/structural-engineering/:subpage" element={<StructuralEngineeringPage isHome={false} />} />
            <Route path="/structural-engineering/:subpage/:detail" element={<StructuralEngineeringPage isHome={false} />} />

            <Route path="/industrial-safety-engineering" element={<IndustrialSafetyPage isHome={true} />} />
            <Route path="/industrial-safety-engineering/:subpage" element={<IndustrialSafetyPage isHome={false} />} />
            <Route path="/industrial-safety-engineering/:subpage/:detail" element={<IndustrialSafetyPage isHome={false} />} />

            {/* Default Computing Routes */}
            <Route path="/:slug" element={<SchoolOfComputingSubPage isHome={true} />} />
            <Route path="/:slug/overview" element={<SchoolOfComputingSubPage isHome={false} />} />
            <Route path="/:slug/:subpage" element={<SchoolOfComputingPage />} />
            <Route path="/:slug/:subpage/:detail" element={<SchoolOfComputingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
