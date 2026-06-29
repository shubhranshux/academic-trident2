import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolOfComputingPage from './pages/SchoolOfComputingPage';
import SchoolOfComputingSubPage from './pages/SchoolOfComputingSubPage';
import SchoolOfComputingLandingPage from './pages/SchoolOfComputingLandingPage';
import CalendarPage from './pages/CalendarPage';
import ChaptersPage from './pages/ChaptersPage';
import TimeTablePage from './pages/TimeTablePage';
import AcademicAdvisoryPage from './pages/AcademicAdvisoryPage';
import AcademicMonitoringPage from './pages/AcademicMonitoringPage';
import PeerEvaluationPage from './pages/PeerEvaluationPage';
import ProgrammeOutcomesPage from './pages/ProgrammeOutcomesPage';

import SchoolOfEngineeringPage from './pages/SchoolOfEngineeringPage';
import SchoolOfEngineeringSubPage from './pages/SchoolOfEngineeringSubPage';
import SchoolOfEngineeringLandingPage from './pages/SchoolOfEngineeringLandingPage';
import BiotechnologyPage from './pages/BiotechnologyPage';
import ElectronicsPage from './pages/ElectronicsPage';
import ElectronicsVLSIPage from './pages/ElectronicsVLSIPage';
import ElectricalEngineeringPage from './pages/ElectricalEngineeringPage';
import MechanicalEngineeringPage from './pages/MechanicalEngineeringPage';
import EResourcesPage from './pages/EResourcesPage';
import CatalogueSearchPage from './pages/CatalogueSearchPage';

// Footer pages — Academics & Student Life
import LibraryPage from './pages/LibraryPage';
import IQACPage from './pages/IQACPage';
import DVVPage from './pages/DVVPage';
import TridentPoliciesPage from './pages/TridentPoliciesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import StudentClubsPage from './pages/StudentClubsPage';
import CiscoThingQbatorPage from './pages/CiscoThingQbatorPage';
import GrievancePage from './pages/GrievancePage';
import ICCPage from './pages/ICCPage';
import AlumniPage from './pages/AlumniPage';

// Footer pages — About the Institution
import AboutPage from './pages/AboutPage';
import NAACPage from './pages/NAACPage';
import NBAPage from './pages/NBAPage';
import NIRFPage from './pages/NIRFPage';
import SIROPage from './pages/SIROPage';
import AICTEDisclosurePage from './pages/AICTEDisclosurePage';
import CareerPage from './pages/CareerPage';
import InformationBrochurePage from './pages/InformationBrochurePage';
import BPUTAffiliationPage from './pages/BPUTAffiliationPage';
import FinancialAuditsPage from './pages/FinancialAuditsPage';
import AntiRaggingPage from './pages/AntiRaggingPage';

// Footer pages — Legal
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Digital Resources Pages
import DigitalResourcesPage from './pages/DigitalResourcesPage';
import PrintJournalsPage from './pages/PrintJournalsPage';
import OpenAccessPage from './pages/OpenAccessPage';
import ENewspaperPage from './pages/ENewspaperPage';
import TriDigiSpacePage from './pages/TriDigiSpacePage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-bg-soft text-text-dark selection:bg-primary/20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/timetable" element={<TimeTablePage />} />
            <Route path="/academic-advisory" element={<AcademicAdvisoryPage />} />
            <Route path="/academic-monitoring" element={<AcademicMonitoringPage />} />
            <Route path="/peer-evaluation" element={<PeerEvaluationPage />} />
            <Route path="/programme-outcomes" element={<ProgrammeOutcomesPage />} />
            <Route path="/e-resources" element={<EResourcesPage />} />
            <Route path="/catalogue" element={<CatalogueSearchPage />} />

            {/* Footer Pages — Academics & Student Life */}
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/dvv" element={<DVVPage />} />
            <Route path="/trident-policies" element={<TridentPoliciesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/student-clubs" element={<StudentClubsPage />} />
            <Route path="/cisco-thingqbator" element={<CiscoThingQbatorPage />} />
            <Route path="/grievance" element={<GrievancePage />} />
            <Route path="/icc" element={<ICCPage />} />
            <Route path="/alumni" element={<AlumniPage />} />

            {/* Footer Pages — About the Institution */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/naac" element={<NAACPage />} />
            <Route path="/nba" element={<NBAPage />} />
            <Route path="/nirf" element={<NIRFPage />} />
            <Route path="/siro" element={<SIROPage />} />
            <Route path="/aicte-disclosure" element={<AICTEDisclosurePage />} />
            <Route path="/bput-affiliation" element={<BPUTAffiliationPage />} />
            <Route path="/financial-audits" element={<FinancialAuditsPage />} />
            <Route path="/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/information-brochure" element={<InformationBrochurePage />} />

            {/* Footer Pages — Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            {/* Digital Resources Pages */}
            <Route path="/digital-resources" element={<DigitalResourcesPage />} />
            <Route path="/print-journals" element={<PrintJournalsPage />} />
            <Route path="/open-access" element={<OpenAccessPage />} />
            <Route path="/e-newspaper" element={<ENewspaperPage />} />
            <Route path="/tri-digi-space" element={<TriDigiSpacePage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            
            {/* Engineering Routes */}
            <Route path="/school-of-engineering" element={<SchoolOfEngineeringLandingPage />} />
            <Route path="/civil-engineering" element={<SchoolOfEngineeringSubPage isHome={true} slug="civil-engineering" />} />
            <Route path="/civil-engineering/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="civil-engineering" />} />
            <Route path="/civil-engineering/:subpage" element={<SchoolOfEngineeringPage slug="civil-engineering" />} />
            <Route path="/civil-engineering/:subpage/:detail" element={<SchoolOfEngineeringPage slug="civil-engineering" />} />

            <Route path="/biotechnology-engineering" element={<BiotechnologyPage isHome={true} />} />
            <Route path="/biotechnology-engineering/:subpage" element={<BiotechnologyPage isHome={false} />} />
            <Route path="/biotechnology-engineering/:subpage/:detail" element={<BiotechnologyPage isHome={false} />} />

            <Route path="/electronics-and-telecommunication-engineering" element={<ElectronicsPage isHome={true} />} />
            <Route path="/electronics-and-telecommunication-engineering/:subpage" element={<ElectronicsPage isHome={false} />} />
            <Route path="/electronics-and-telecommunication-engineering/:subpage/:detail" element={<ElectronicsPage isHome={false} />} />

            <Route path="/electronics-vlsi-design" element={<ElectronicsVLSIPage isHome={true} />} />
            <Route path="/electronics-vlsi-design/:subpage" element={<ElectronicsVLSIPage isHome={false} />} />
            <Route path="/electronics-vlsi-design/:subpage/:detail" element={<ElectronicsVLSIPage isHome={false} />} />

            <Route path="/electrical-and-electronics-engineering" element={<ElectricalEngineeringPage isHome={true} />} />
            <Route path="/electrical-and-electronics-engineering/:subpage" element={<ElectricalEngineeringPage isHome={false} />} />
            <Route path="/electrical-and-electronics-engineering/:subpage/:detail" element={<ElectricalEngineeringPage isHome={false} />} />

            <Route path="/diploma-electrical-engineering" element={<SchoolOfEngineeringSubPage isHome={true} slug="diploma-electrical-engineering" />} />
            <Route path="/diploma-electrical-engineering/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="diploma-electrical-engineering" />} />
            <Route path="/diploma-electrical-engineering/:subpage" element={<SchoolOfEngineeringPage slug="diploma-electrical-engineering" />} />
            <Route path="/diploma-electrical-engineering/:subpage/:detail" element={<SchoolOfEngineeringPage slug="diploma-electrical-engineering" />} />

            <Route path="/mechanical-engineering" element={<MechanicalEngineeringPage isHome={true} />} />
            <Route path="/mechanical-engineering/:subpage" element={<MechanicalEngineeringPage isHome={false} />} />
            <Route path="/mechanical-engineering/:subpage/:detail" element={<MechanicalEngineeringPage isHome={false} />} />

            {/* M.Tech Engineering Routes */}
            <Route path="/environmental-engineering-mtech" element={<SchoolOfEngineeringSubPage isHome={true} slug="environmental-engineering-mtech" />} />
            <Route path="/environmental-engineering-mtech/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="environmental-engineering-mtech" />} />
            <Route path="/environmental-engineering-mtech/:subpage" element={<SchoolOfEngineeringPage slug="environmental-engineering-mtech" />} />

            <Route path="/energy-and-environmental-engineering-mtech" element={<SchoolOfEngineeringSubPage isHome={true} slug="energy-and-environmental-engineering-mtech" />} />
            <Route path="/energy-and-environmental-engineering-mtech/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="energy-and-environmental-engineering-mtech" />} />
            <Route path="/energy-and-environmental-engineering-mtech/:subpage" element={<SchoolOfEngineeringPage slug="energy-and-environmental-engineering-mtech" />} />

            <Route path="/electrical-vehicle-technology-mtech" element={<SchoolOfEngineeringSubPage isHome={true} slug="electrical-vehicle-technology-mtech" />} />
            <Route path="/electrical-vehicle-technology-mtech/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="electrical-vehicle-technology-mtech" />} />
            <Route path="/electrical-vehicle-technology-mtech/:subpage" element={<SchoolOfEngineeringPage slug="electrical-vehicle-technology-mtech" />} />

            <Route path="/structural-engineering-mtech" element={<SchoolOfEngineeringSubPage isHome={true} slug="structural-engineering-mtech" />} />
            <Route path="/structural-engineering-mtech/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="structural-engineering-mtech" />} />
            <Route path="/structural-engineering-mtech/:subpage" element={<SchoolOfEngineeringPage slug="structural-engineering-mtech" />} />

            <Route path="/industrial-safety-engineering-mtech" element={<SchoolOfEngineeringSubPage isHome={true} slug="industrial-safety-engineering-mtech" />} />
            <Route path="/industrial-safety-engineering-mtech/overview" element={<SchoolOfEngineeringSubPage isHome={false} slug="industrial-safety-engineering-mtech" />} />
            <Route path="/industrial-safety-engineering-mtech/:subpage" element={<SchoolOfEngineeringPage slug="industrial-safety-engineering-mtech" />} />

            {/* Default Computing Routes */}
            <Route path="/school-of-computing" element={<SchoolOfComputingLandingPage />} />
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
