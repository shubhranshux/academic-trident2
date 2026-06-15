import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolOfComputingPage from './pages/SchoolOfComputingPage';
import SchoolOfComputingSubPage from './pages/SchoolOfComputingSubPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-bg-soft text-text-dark selection:bg-primary/20">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
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
