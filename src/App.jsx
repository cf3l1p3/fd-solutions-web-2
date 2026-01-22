import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/ScrollToTop';
// Pages will be imported here later
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="clients" element={<Clients />} />
            <Route path="contact" element={<Contact />} />
            {/* Redirect any other path to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
