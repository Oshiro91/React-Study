import {useState} from 'react'
import './App.css'
import Empresas from './pages/empresas'
import Variaveis from './pages/Variaveis'
function App() {
  const [currentPage, setCurrentPage] = useState('empresas'); // Default page is KPI form



  // Navigation handler
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on selection
  const renderPage = () => {
    switch(currentPage) {
      case 'empresas':
        return <Empresas  />;
      case 'variaveis':
        return <Variaveis  />;
      case 'valores':
        return <Reports />;
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

function Reports() {
  return <div className="page-container"><h1>Valores</h1><h2>ERROR 404 🤓🤓</h2></div>;
}


export default App
