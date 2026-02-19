import { Clock, FileText, Mail } from 'lucide-react';
import './Navbar.css';

function Navbar({ title, breadcrumb }) {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (
    <div className="navbar">
      <div className="navbar-left">
        {breadcrumb ? (
          <div className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item}
                {index < breadcrumb.length - 1 && <span className="breadcrumb-separator">›</span>}
              </span>
            ))}
          </div>
        ) : (
          <h2 className="navbar-title">{title}</h2>
        )}
      </div>

      <div className="navbar-right">
        <span className="navbar-timezone">MST</span>
        <div className="navbar-time">
          <Clock size={16} />
          <span>{currentTime}</span>
        </div>
        <button className="navbar-icon-btn">
          <FileText size={20} />
        </button>
        <button className="navbar-icon-btn">
          <Mail size={20} />
        </button>
        <div className="navbar-avatar">
          <img src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
