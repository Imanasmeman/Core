import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import Timesheet from './pages/Timesheet';
import Employees from './pages/Employees';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timesheet" element={<Timesheet />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
