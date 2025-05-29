import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './App.css'
import Empresas from './Empresas'

function App() {
  const [kpiData, setKpiData] = useState({});
  const [currentPage, setCurrentPage] = useState('kpi'); // Default page is KPI form

  // Function to fetch data from Supabase
  const fetchDataFromSupabase = async () => {
    try {
      const response = await axios.get('https://agdznbhmbteodywfnuqq.supabase.co/rest/v1/ENTERPRISES', {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZHpuYmhtYnRlb2R5d2ZudXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTQ0MDMsImV4cCI6MjA1NzUzMDQwM30.m7od2CmAcpTzB1mnR3yk7LcvHvWk4n687Jqsudxy43s',
        }
      });
      setKpiData(response.data[1]);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the fetchDataFromSupabase function on component mount
  useEffect(() => {
    fetchDataFromSupabase();
  }, []);

  // Navigation handler
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on selection
  const renderPage = () => {
    switch(currentPage) {
      case 'empresas':
        return <Empresas kpiData={kpiData} />;
      case 'variaveis':
        return <Dashboard />;
      case 'valores':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      <div className="content-container">
        {renderPage()}
      </div>
    </div>
  );
}

function Navbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'empresas', label: 'Empresas' },
    { id: 'variaveis', label: 'Variáveis' },
    { id: 'valores', label: 'Valores' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>React Study</h2>
      </div>
      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.id}>
            <button 
              className={currentPage === item.id ? 'active' : ''}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Placeholder components for other pages
function Dashboard() {
  return <div className="page-container"><h1>Dashboard</h1><p>Dashboard content will go here</p></div>;
}

function Reports() {
  return <div className="page-container"><h1>Reports</h1><p>Reports content will go here</p></div>;
}

function Settings() {
  return <div className="page-container"><h1>Settings</h1><p>Settings content will go here</p></div>;
}

export default App
