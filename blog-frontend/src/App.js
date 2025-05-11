

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TravelPage from './pages/TravelPage';
import LifestylePage from './pages/LifestylePage';
import FoodPage from './pages/FoodPage';
import TechnologyPage from './pages/TechnologyPage';
import FinancePage from './pages/FinancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/lifestyle" element={<LifestylePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/finance" element={<FinancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
